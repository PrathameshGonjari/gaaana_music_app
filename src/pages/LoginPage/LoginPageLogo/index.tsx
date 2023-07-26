import LoginLogo from "@images/logo.png";
import Flex from "@shared-layouts/Flex";
import { ImageWrapper } from "./style";

const LoginPageLogo = () => {
  return (
    <Flex justifycontent="center" alignitems="center">
      <ImageWrapper>
        <img src={LoginLogo} />
      </ImageWrapper>
    </Flex>
  );
};

export default LoginPageLogo;
