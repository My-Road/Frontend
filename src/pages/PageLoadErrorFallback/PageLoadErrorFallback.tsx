import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FC } from "react";
import { Trans } from "react-i18next";

const PageLoadErrorFallback: FC = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="80vh"
      px={2}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        <Trans i18nKey="PublicPages.LoadErrorFallback.title">
          Failed to load the page
        </Trans>
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        <Trans i18nKey="PublicPages.LoadErrorFallback.description">
          Please check your internet connection or try reloading the page
        </Trans>
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={handleReload}
        color="error"
      >
        <Trans i18nKey="Buttons.reload">Reload</Trans>
      </Button>
    </Box>
  );
};

export default PageLoadErrorFallback;
