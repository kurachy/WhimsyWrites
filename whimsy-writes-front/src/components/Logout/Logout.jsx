import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { logout } from '../../services/authService'


const Logout = () => {
  const { setAuthInfo } = useAuth();

  const handleLogout = async () => {
    setAuthInfo(null);
    localStorage.removeItem('accessToken');

    await logout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
