import { Typography } from "@mui/material";
import styled from "styled-components";

export const StopIconStyle = {
  height: 38,
  width: 38,
};

export const IconStyle = {
  ...StopIconStyle,
  color: "black",
};

export const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: "0.2",
});

export const MediaContainerWrapper = styled.div`
  min-width: 220px;
  .playPauseButton {
    min-width: 108px;
  }
`;
