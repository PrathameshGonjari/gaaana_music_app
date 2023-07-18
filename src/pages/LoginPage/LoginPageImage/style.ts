import styled from "styled-components";
import BackgroundImage from "@images/background.jpg";

export const BackgroundImageMainWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
`;

export const LoginBackgroundImageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background: url(${BackgroundImage});
  background-size: cover;
`;
