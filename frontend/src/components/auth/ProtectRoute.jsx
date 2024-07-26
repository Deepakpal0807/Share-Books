// components/auth/ProtectRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ user, redirect, children }) => {
  if (!user) {
    return <Navigate to={redirect} />;
  }
  return children;
};

export default ProtectRoute;
