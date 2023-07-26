import WebLogoIcon from "@icons/webIcon.png";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import CustomButton from "@shared-ui-components/Button";
import { BUTTON_TYPE } from "@shared-ui-components/Button/helper";
import CustomModal from "@shared-ui-components/Modal";
import { removeUserData } from "@src/actions";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flex from "../../shared-layouts/Flex";
import { ModalStyle } from "./style";

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
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Flex justifycontent="center" alignitems="center">
              <Avatar src={WebLogoIcon} alt="" />
              <Typography style={{ marginLeft: 10 }} variant="h6">
                Gaaana
              </Typography>
              {/* <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  ml: 2
                }}
              >
                <SearchBar
                  filter={filter}
                  onFilterChange={onSearch}
                />
              </Box> */}
            </Flex>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user icon" src={picture} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <CustomModal visible={visible} handleCloseModal={handleCloseModal}>
        <ModalStyle>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want log out from Gaaana App?
          </Typography>
          <Flex style={{ margin: 20 }} justifycontent="space-around">
            <CustomButton handleClick={handleLogout}>Log Out</CustomButton>
            <CustomButton
              type={BUTTON_TYPE.SECONDARY}
              handleClick={handleCloseModal}
            >
              Cancel
            </CustomButton>
          </Flex>
        </ModalStyle>
      </CustomModal>
    </>
  );
};

export default NavigationBar;
