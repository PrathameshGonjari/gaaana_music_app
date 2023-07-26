import { Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import Flex from "@shared-layouts/Flex";
import CustomButton from "@shared-ui-components/Button";
import { addUserData, addUserToken } from "@src/actions";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { LoginPageCardWrapper } from "./style";

const LoginPageCard = () => {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const accessToken = response?.access_token;
      if (accessToken) {
        Cookies.set("accessToken", accessToken);
        dispatch(addUserToken(accessToken));
      }
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response?.access_token}`,
            },
          }
        );
        if (res?.data) {
          dispatch(addUserData(res?.data));
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Flex justifycontent="center" alignitems="center">
      <LoginPageCardWrapper>
        <Typography variant="h5" color="primary">
          Welcome to Gaaana App
        </Typography>
        <CustomButton handleClick={login} className="loginButton">
          Login With Google Account
        </CustomButton>
      </LoginPageCardWrapper>
    </Flex>
  );
};

export default LoginPageCard;
