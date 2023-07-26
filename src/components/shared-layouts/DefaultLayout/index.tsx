import { Outlet } from "react-router-dom";
import NavigationBar from "@shared-ui-components/NavBar";
import BottomNavBar from "@shared-ui-components/BottomNavBar";
import { Container } from "@mui/material";

const DefaultLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
      <Outlet />
      </Container>
      <BottomNavBar/>
    </div>
  );
};

export default DefaultLayout;
