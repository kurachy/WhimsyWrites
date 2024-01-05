import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  
  if (!authState.accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;