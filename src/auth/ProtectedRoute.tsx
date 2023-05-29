/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Define additional props for protected routes
type ProtectedRouteProps = RouteProps & {
  component: React.ComponentType<any>;
};

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      // @ts-ignore
      render={(props: any) => (user ? <Component {...props} /> : <Navigate to="/login" />)}
    />
  );
};

export default ProtectedRoute;
