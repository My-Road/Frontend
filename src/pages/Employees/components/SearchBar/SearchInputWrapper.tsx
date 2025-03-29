import React, { ChangeEvent } from "react";
import { InputBase, useTheme, useMediaQuery } from "@mui/material";

interface SearchInputWrapperProps {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInputWrapper: React.FC<SearchInputWrapperProps> = ({ value, onChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <InputBase
      placeholder="Search"
      value={value}
      onChange={onChange} 
      sx={{
        flex: 1,
        fontSize: isSmallScreen ? "20px" : "31px",
        color: "#A0A0A0",
        fontFamily: "Arial",
        ml: isSmallScreen ? 1 : 2,
      }}
      inputProps={{ "aria-label": "search employees" }}
    />
  );
};

export default SearchInputWrapper;