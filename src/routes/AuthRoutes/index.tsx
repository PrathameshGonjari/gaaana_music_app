import React from "react";
import { useRoutes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import LoginPage from "../../pages/LoginPage";

const AuthRoutes = () => useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    { path: "*", element: <ErrorPage /> },
  ])

export default AuthRoutes;