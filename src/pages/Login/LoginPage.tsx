import logo from "@/assets/images/logo.png";
import loginImg from "@/assets/images/logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Card, Container, Grid2 as Grid, Stack } from "@mui/material";
import LoginForm from "./components/LoginForm/LoginForm";

const LoginPage = () => {
  const { isTabletOrLess, isMobile } = useMediaQuery();

  return (
    <Container
      sx={{ py: { xs: 4, sm: 8 }, maxWidth: { lg: 1400 }, height: "100vh" }}
    >
      <Grid
        container
        height="100%"
        borderRadius={"10px"}
        sx={{ overflow: "hidden" }}
      >
        {!isTabletOrLess && (
          <Grid size={{ xs: 6 }}>
            <Card
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: "100%",
              }}
            >
              <Stack justifyContent="center" alignItems="center" height="100%">
                <img src={loginImg} alt="booking" width="65%" />
              </Stack>
            </Card>
          </Grid>
        )}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{
              bgcolor: (theme) => theme.palette.primary.main,
              width: "100%",
            }}
          >
            <Card sx={{ p: 3, m: 2, maxWidth: `${isMobile ? "85%" : "70%"}` }}>
              <Stack direction="row" justifyContent="center" mb={3} py={2}>
                <img
                  src={logo}
                  alt="safer logo"
                  width={`${isMobile ? "55%" : "45%"}`}
                />
              </Stack>
              <LoginForm />
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
