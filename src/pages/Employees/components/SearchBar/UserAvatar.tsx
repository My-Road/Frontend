import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const UserAvatar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="img"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb7afc11d42b10a8055bbe018f51f9649ed2692"
      alt="User avatar"
      sx={{
        width: isSmallScreen ? 60 : 90,
        height: isSmallScreen ? 60 : 86,
        borderRadius: "50%",
      }}
    />
  );
};

export default UserAvatar;