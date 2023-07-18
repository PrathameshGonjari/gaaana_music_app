import React from "react";
import AppRoutes from "../AppRoutes";
import AuthRoutes from "../AuthRoutes";

const MiddlewareRoute = () => {
  const token = false;
  if (token) return <AppRoutes />;
  if (!token) return <AuthRoutes />;
  return <></>;
};

export default MiddlewareRoute;
