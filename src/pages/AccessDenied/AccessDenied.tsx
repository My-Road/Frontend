import lock from "@/animation/unauthenticated.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import { FC } from "react";
import { Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AccessDenied: FC = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/me");
  const backToPreviousPage = () => navigate(-1);

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "grey.100",
      }}
    >
      <Stack sx={{ alignItems: "center", gap: 1 }}>
        <Lottie
          animationData={lock}
          style={{ width: "300px", height: "300px" }}
        />
        <Typography
          variant="h3"
          sx={{ color: "grey.700" }}
          fontSize={{ xs: "h5.fontSize", md: "h4.fontSize", xl: "h3.fontSize" }}
          fontWeight={500}
        >
          <Trans i18nKey="PublicPages.AdditionalAccess.title">
            Additional Access Required
          </Trans>
        </Typography>
        <Typography variant="body1" sx={{ color: "grey.700" }}>
          <Trans i18nKey="PublicPages.AdditionalAccess.description">
            It seems you don&apos;t have access to this page. Please contact a
            system administrator if access is needed.
          </Trans>
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} gap={2} sx={{ mt: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={backToPreviousPage}
            size="large"
            variant="contained"
          >
            <Trans i18nKey="Buttons.back">Back</Trans>
          </Button>
          <Button
            startIcon={<HomeIcon />}
            onClick={goToHome}
            size="large"
            variant="outlined"
          >
            <Trans i18nKey="Buttons.home">Home</Trans>
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default AccessDenied;
