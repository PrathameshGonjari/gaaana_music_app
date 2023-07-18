import LoginLogo from "@images/logo.png";
import Flex from "@shared-layouts/Flex";
import { ImageWrapper } from "./style";

const LoginPageLogo = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <ImageWrapper>
        <img src={LoginLogo} />
      </ImageWrapper>
    </Flex>
  );
};

export default LoginPageLogo;
