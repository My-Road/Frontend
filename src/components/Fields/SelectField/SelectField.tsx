import { FC } from "react";
import { useField } from "formik";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { SelectFieldProps } from "./types";

const SelectField: FC<SelectFieldProps> = ({
  name,
  options,
  label,
  ...rest
}) => {
  const [field, meta, helpers] = useField<string>(name);
  const { t } = useTranslation("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    helpers.setValue(event.target.value as string);
  };

  const showError = meta.touched && Boolean(meta.error);

  return (
    <FormControl fullWidth size="small" error={showError}>
      <InputLabel>{label || t(`Textfields.${name}`)}</InputLabel>
      <MuiSelect
        label={label || t(`Textfields.${name}`)}
        value={field.value}
        onChange={handleChange}
        onBlur={field.onBlur}
        name={field.name}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {t(`Textfields.${option.label}`)}
          </MenuItem>
        ))}
      </MuiSelect>
      {showError && (
        <FormHelperText>{t(`TextfieldErrors.${meta.error}`)}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectField;
