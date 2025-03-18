import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import { useField } from "formik";

interface RoleSelectProps {
  name: string;
}

const roles = ["Super Admin", "Admin", "Manager"];

const RoleSelect: React.FC<RoleSelectProps> = ({ name }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel id={`${name}-label`}>Select Role</InputLabel>
      <Select labelId={`${name}-label`} {...field}>
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