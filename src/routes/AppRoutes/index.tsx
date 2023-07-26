import DefaultLayout from "@shared-layouts/DefaultLayout";
import ErrorPage from "@src/pages/ErrorPage";
import HomePage from "@src/pages/HomePage";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  
export default AppRoutes;
