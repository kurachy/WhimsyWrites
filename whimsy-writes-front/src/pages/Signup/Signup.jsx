import React, { useState } from 'react';
import { required, email, composeValidators } from '../../utils/validation';
import { createUser, loginUser } from '../../services/userService';
import { useAuth } from '../../contexts/AuthContext';
import { login } from '../../services/authService'
import TextInput from '../../components/TextInput/TextInput'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import './signup.css'

function Signup({ isLoginPage }) {
  const navigate = useNavigate();
  const { setAuthInfo } = useAuth();
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
    if (!isLoginPage) {
      tempErrors.username = required(formData.username);
    }
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
        const result = isLoginPage ? await login(formData) : await createUser(formData);

        console.log(`${isLoginPage ? 'Login' : 'Signup'} successful`);
        await setAuthInfo( result.accessToken )
        navigate('/dashboard')
      } catch (error) {
        if (error.errors) {
          setErrors(error.errors);
        } else {
          console.error(`${isLoginPage ? 'Login' : 'Signup'} error:`, error.message);
        }
      }
    }
  }

  return (
    <main className='signup-page'>
      <h1 className="signup-page__title">{isLoginPage ? 'Login' : 'Create an account'}</h1>
      <form className='signup-page__form' onSubmit={handleSubmit}>
        {!isLoginPage && (
          <>
            <TextInput label="Username*" type="text"
              name="username"
              value={formData.username}
              onChange={handleChange} errorMessage={errors.username} />
            <TextInput label="Full name" type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange} errorMessage={errors.fullname} />
            <TextInput label="Avatar" type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange} errorMessage={errors.avatar} />
          </>
        )}
        <TextInput label="Email*" type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} errorMessage={errors.email} />
        <TextInput label="Password*" type="password"
          name="password"
          value={formData.password}
          onChange={handleChange} errorMessage={errors.password} />
        <div className='signup-page__submit-and-login-link'>
          <button className='signup-page__submit' type="submit">{isLoginPage ? 'Login' : 'Signup'}</button>

          <p>
            {isLoginPage ?
              <>Don't have an account? <Link to="/signup" className='signup-page__login-link'>Signup</Link></> :
              <>Already have an account? <Link to="/login" className='signup-page__login-link'>Login</Link></>
            }
          </p>


        </div>
      </form>
    </main>
  );  
}

export default Signup;
