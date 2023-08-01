import { Avatar, Typography } from "@mui/material";
import Flex from "@shared-layouts/Flex";
import WebLogoIcon from "@icons/webIcon.png";

const Logo = () => {
  return (
    <Flex justifycontent="center" alignitems="center">
      <Avatar src={WebLogoIcon} alt="web icon" />
      <Typography style={{ marginLeft: 10 }} variant="h6">
        Gaaana
      </Typography>
    </Flex>
  );
};

export default Logo;
