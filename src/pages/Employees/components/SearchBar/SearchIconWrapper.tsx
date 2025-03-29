import React from "react";
import { IconButton, useTheme, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchIconWrapper: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <IconButton sx={{ width: isSmallScreen ? 30 : 45, height: isSmallScreen ? 30 : 45 }}>
      <SearchIcon sx={{ width: "100%", height: "100%" }} />
    </IconButton>
  );
};

export default SearchIconWrapper;