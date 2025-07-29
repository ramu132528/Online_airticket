import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  if (!token) {
    
    localStorage.setItem('redirectAfterLogin', location.pathname);

    
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
