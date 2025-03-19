import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import { useField } from "formik";
import { Trans } from "react-i18next";

interface RoleSelectProps {
  name: string;
}

const roles = ["Super Admin", "Admin", "Manager"];

const RoleSelect: React.FC<RoleSelectProps> = ({ name }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel id={`${name}-label`}><Trans i18nKey="Textfields.selectUserType">Select User Type</Trans></InputLabel>
      <Select label="Select User Type" labelId={`${name}-label`} {...field}>
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default RoleSelect;