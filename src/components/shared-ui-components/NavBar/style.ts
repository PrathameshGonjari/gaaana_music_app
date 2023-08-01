import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  background-color: white;
  box-shadow: 24px;
  padding: 20px;
  border-radius: 10px;
`;

export const AppBarWrapper = styled(Box)`
  .toolbar {
    display: flex;
    justify-content: space-between;
  }
`;
