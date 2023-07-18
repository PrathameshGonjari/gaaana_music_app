import ErrorPage from "@pages/ErrorPage";
import LoginPage from "@pages/LoginPage";
import { useRoutes } from "react-router-dom";

const AuthRoutes = () => useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    { path: "*", element: <ErrorPage /> },
  ])

export default AuthRoutes;