import React from "react";
import { CardActions, Button } from "@mui/material";
import { Trans } from "react-i18next";

interface EmployeeActionsProps {
  onViewMore: () => void;
}

const EmployeeActions: React.FC<EmployeeActionsProps> = ({ onViewMore }) => {
  return (
    <CardActions sx={{ justifyContent: "center", mt: 2 }}>
      <Button variant="contained" color="primary" fullWidth onClick={onViewMore}>
        <Trans i18nKey="Textfields.viewMore">View More</Trans>
      </Button>
    </CardActions>
  );
};

export default EmployeeActions;