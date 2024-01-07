import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { isTokenExpired } from '../../utils/isTokenExpired';
import { renewAccessToken } from '../../utils/renewAccessToken';

const ProtectedRoute = ({ children }) => {
  const { authState, setAuthInfo } = useAuth();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      let accessToken = authState.accessToken;

      if (!accessToken) {
        setIsVerified(true);
        return;
      }

      if (isTokenExpired(accessToken)) {
        accessToken = await renewAccessToken(accessToken);
        await setAuthInfo(accessToken);
      }

      setIsVerified(true);
    };

    verifyToken();
  }, [authState.accessToken]);

  if (!isVerified) {
    return <div>Loading...</div>;
  }

  if (!authState.accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
