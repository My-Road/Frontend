import { SelectProps } from "@mui/material/Select";

export type Option = {
  value: string;
  label: string; 
};

export type SelectFieldProps = Omit<SelectProps, "name" | "value" | "onChange" | "children"> & {
  name: string;
  options: Option[];
  label?: string;
};