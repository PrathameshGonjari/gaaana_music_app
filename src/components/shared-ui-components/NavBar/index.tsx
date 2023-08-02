import { AppBar, Box, CssBaseline } from "@mui/material";
import { removeUserData } from "@src/actions";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogOutModal from "./LogOutModal";
import Logo from "./Logo";
import Settings from "./Settings";
import { AppToolBar } from "./style";

const settings = ["Logout"];

const NavigationBar = () => {
  const dispatch = useDispatch();

  const userData = useSelector(
    (state: AppReducerState) => state.userappreducer.userData
  );

  const { picture } = userData;

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [visible, setVisible] = useState<boolean>(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCloseUserMenu = (event: any) => {
    if (event?.target?.innerHTML === settings[0]) {
      setVisible(true);
    }
    setAnchorElUser(null);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("accessToken");
    Cookies.remove("user_id");
    dispatch(removeUserData());
    handleCloseModal();
  };

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar component="nav">
          <AppToolBar>
            <Logo />
            <Settings
              picture={picture}
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              settings={settings}
            />
          </AppToolBar>
        </AppBar>
      </Box>
      <LogOutModal
        visible={visible}
        handleCloseModal={handleCloseModal}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default NavigationBar;
