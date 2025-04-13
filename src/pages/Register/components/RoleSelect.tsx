import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import { useField } from "formik";
import { Trans } from "react-i18next";
import { ROLES } from "@/constants";

interface RoleSelectProps {
  name: string;
}

const RoleSelect: React.FC<RoleSelectProps> = ({ name }) => {
  const [field, meta] = useField(name);
  
  return (
    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel id={`${name}-label`}><Trans i18nKey="Textfields.selectUserType">Select User Type</Trans></InputLabel>
      <Select label="Select User Type" labelId={`${name}-label`} {...field}>
        {ROLES.map((role) => (
          <MenuItem key={role.name} value={role.role}>
            {role.name}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default RoleSelect;