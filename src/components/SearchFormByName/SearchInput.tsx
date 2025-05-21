import React from "react";
import {
  InputAdornment,
  IconButton,
  OutlinedInputProps,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "../Fields/TextField";

interface SearchInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  label: string;
  isClearVisible: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  label,
  isClearVisible,
  name,
}) => {
  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon color="action" />
    </InputAdornment>
  );

  const endAdornment = isClearVisible ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="Clear search"
        onClick={onClear}
        edge="end"
        size="small"
      >
        <ClearIcon />
      </IconButton>
    </InputAdornment>
  ) : null;

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      autoComplete="off"
      fullWidth
      variant="outlined"
      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
      slotProps={{
        input: {
          startAdornment,
          endAdornment,
        } as Partial<OutlinedInputProps>,
      }}
    />
  );
};

export default SearchInput;
