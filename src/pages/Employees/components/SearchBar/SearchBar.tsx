import React, { ChangeEvent } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import SearchIconWrapper from "./SearchIconWrapper";
import SearchInputWrapper from "./SearchInputWrapper";
import UserAvatar from "./UserAvatar";

interface SearchBarProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value = "", onChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxWidth="1000px"
      width="100%"
      height={isSmallScreen ? "70px" : "97px"}
      margin="0 auto"
      borderRadius="50px"
      border="1px solid #000"
      px={isSmallScreen ? 1.5 : 3} 
    >
      <Box display="flex" alignItems="center">
        <SearchIconWrapper />
        <SearchInputWrapper value={value} onChange={onChange} />
      </Box>
      <UserAvatar />
    </Box>
  );
};

export default SearchBar;
