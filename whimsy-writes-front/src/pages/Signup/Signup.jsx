import React, { useState } from 'react';
import { required, email, composeValidators } from '../../utils/validation';
import { createUser } from '../../services/userService';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    avatar: '',
    email: '',
    password: ''

  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = required(formData.username);
    tempErrors.email = composeValidators(required, email)(formData.email);
    tempErrors.password = required(formData.password);
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === undefined);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: composeValidators(required, name === 'email' ? email : () => undefined)(value)
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const signupResult = await createUser(formData);
        console.log('Signup successful:', signupResult);
      } catch (error) {
        if (error.errors) {
          setErrors(error.errors);
        } else {
          console.error('Signup error:', error.message);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </label>
      <label>
        Fullname:
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        {errors.fullname && <div style={{ color: 'red' }}>{errors.fullname}</div>}
      </label>
      <label>
        Avatar:
        <input
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
        {errors.avatar && <div style={{ color: 'red' }}>{errors.avatar}</div>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
