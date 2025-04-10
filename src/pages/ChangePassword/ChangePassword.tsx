import Grid from "@mui/material/Grid2";
import ResetPasswordForm from "./components/ChangePasswordForm.tsx";
import { Paper, Stack } from "@mui/material";
import Logo from "@/assets/images/logo.png";

const ChangePassword: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid size={{ xs: 10, sm: 8, md: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Stack alignItems="center">
            <img src={Logo} alt="Logo" width="150px" height="150px" />
          </Stack>
          <ResetPasswordForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
