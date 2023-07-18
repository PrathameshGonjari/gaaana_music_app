import React from "react";
import LoginLogo from "@images/logo.png";
import { ImageWrapper } from "./style";
import Flex from "../../../components/shared-layouts/Flex";

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
