import Grid from "@mui/material/Grid2";
import ResetPasswordForm from "./components/ResetPasswordForm.tsx";

const ForgetPassword: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <ResetPasswordForm />
    </Grid>
  );
};

export default ForgetPassword;
