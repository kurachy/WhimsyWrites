import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { logout } from '../../services/authService'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './logout.css'


const Logout = () => {
  const { setAuthInfo } = useAuth();

  const handleLogout = async () => {
    await setAuthInfo(null);
    localStorage.removeItem('accessToken');

    await logout();
  };

  return (
    <button className='logout-button' onClick={handleLogout}>Logout <FontAwesomeIcon icon={faRightFromBracket} /></button>
  );
};

export default Logout;
