import { Typography } from "@mui/material";
import Flex from "../../../components/shared-layouts/Flex";
import CustomButton from "../../../components/shared-ui-components/Button";
import { LoginPageCardWrapper } from "./style";

const LoginPageCard = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <LoginPageCardWrapper>
        <Typography variant="h5" color="primary">
          Welcome to Gaaana App
        </Typography>
        <CustomButton className="loginButton">
          Login With Google Account
        </CustomButton>
      </LoginPageCardWrapper>
    </Flex>
  );
};

export default LoginPageCard;
