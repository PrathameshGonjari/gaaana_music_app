import { useSelector } from "react-redux";
import AppRoutes from "../AppRoutes";
import AuthRoutes from "../AuthRoutes";

const MiddlewareRoute = () => {
  const accessToken = useSelector(
    (state: AppReducerState) => state.userappreducer.userToken
  );

  if (accessToken) return <AppRoutes />;
  return <AuthRoutes />;
};

export default MiddlewareRoute;
