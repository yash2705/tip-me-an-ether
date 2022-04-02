import React from "react";
import { useMoralis } from "react-moralis";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RestrictedRoute = () => {
  const { isAuthenticated } = useMoralis();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/connect" state={{ from: location }} replace />
  );
};

export default RestrictedRoute;
