import { createBrowserRouter } from "react-router-dom";
import MiddlewareRoute from "./MiddlewareRoute";
const router = createBrowserRouter([
  {
    path: "/*",
    element: <MiddlewareRoute />,
  },
]);

export default router;
