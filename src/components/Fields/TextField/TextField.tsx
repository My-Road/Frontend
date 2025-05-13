import MuiTextField from "@mui/material/TextField";
import { useField } from "formik";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TextFieldProps } from "./types";

const TextField: FC<TextFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField<string>(name);

  const textFieldConfigs = {
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    textFieldConfigs.error = true;
  }

  const { t } = useTranslation("translation");

  return (
    <MuiTextField
      size="small"
      variant="outlined"
      fullWidth
      helperText={
        meta && meta.touched && meta.error && t(`TextfieldErrors.${meta.error}`)
      }
      slotProps={{
        formHelperText: {
          sx: { textAlign: "left" },
        },
      }}
      label={t(`Textfields.${name}`)}
      {...textFieldConfigs}
    />
  );
};

export default TextField;
