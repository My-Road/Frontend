import Grid from "@mui/material/Grid2";
import { Paper, Stack, Typography } from "@mui/material";
import Logo from "@/assets/images/logo.png";
import { Trans } from "react-i18next";
import RegisterForm from "./components/RegisterForm";
import routeHOC from "@/routes/HOCs/routeHOC";

const Register: React.FC = () => {
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
          <Typography variant="h5" gutterBottom align="center">
            <Trans i18nKey="Buttons.register">Register</Trans>
          </Typography>
          <RegisterForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

const RegisterWithRoute = routeHOC({
  title: "Register",
  pageAccessName: "Register",
})(Register);

export default RegisterWithRoute;
