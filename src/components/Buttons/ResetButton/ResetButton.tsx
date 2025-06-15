import { Button, Box } from "@mui/material";
import { Trans } from "react-i18next";
import { ResetButtonProps } from "./types";

const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <Box minWidth={120}>
      <Button
        onClick={onClick}
        variant="outlined"
        color="secondary"
        sx={{
          color: (theme) => theme.palette.secondary.light,
          borderColor: (theme) => theme.palette.secondary.light,
          "&:hover": {
            borderColor: (theme) => theme.palette.secondary.light,
            background: (theme) => theme.palette.secondary.contrastText,
          },
        }}
      >
        <Trans i18nKey="Buttons.reset">Reset</Trans>
      </Button>
    </Box>
  );
};

export default ResetButton;