import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Define additional props for protected routes
type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { checkTokenLocal } = useAuth();

  if (!checkTokenLocal()) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default ProtectedRoute;
