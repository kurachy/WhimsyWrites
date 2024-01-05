import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: localStorage.getItem('accessToken'),
  });

  const setAuthInfo = ( accessToken ) => {
    localStorage.setItem('accessToken', accessToken); 
    setAuthState(prevState => ({ ...prevState, accessToken }));
  };


  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuthState({ accessToken: token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
