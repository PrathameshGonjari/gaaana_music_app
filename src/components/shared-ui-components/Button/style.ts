import { Button } from "@mui/material";
import { styled } from "styled-components";
import Colors from "../../../constants/Colors";

export const CustomButtonStyle = styled(Button)`
  &.MuiButton-root {
    background-color: ${Colors.terra_cotta};
    color: white;   
    padding: 12px 20px;
    border-radius: 10px 10px;
    &:hover {
        background-color: ${Colors.scorpio_scarlet_seal};
        color: ${Colors.white};
      }
  }
`;
