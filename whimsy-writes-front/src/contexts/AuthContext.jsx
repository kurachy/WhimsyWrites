import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserById } from '../services/userService';
import { decodeToken } from '../utils/decodeToken';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: localStorage.getItem('accessToken'),
    user: null,
  });

  const setAuthInfo = async (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    const decoded = decodeToken(accessToken);
    if (decoded && decoded.userId) {
      const userDetails = await getUserById(decoded.userId);
      setAuthState({ accessToken, user: userDetails });
    } else {
      setAuthState({ accessToken, user: null });
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        await setAuthInfo(token);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

