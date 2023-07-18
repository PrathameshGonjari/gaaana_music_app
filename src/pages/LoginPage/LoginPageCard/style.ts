import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const LoginPageCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 350px;
  border-radius: 12px;
  background: ${Colors.white};
  padding: 58px 0px;
  .loginButton {
    margin-top: 20px;
  }
`;
