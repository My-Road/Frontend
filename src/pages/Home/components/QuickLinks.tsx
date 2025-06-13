import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={2}>
<Typography variant="h6" gutterBottom sx={{ textAlign: "start", pl: 2 }}>
        {t("Dialogs.Title.quickLinks")}
      </Typography>

      <Button variant="contained" color="primary" component={Link} to="/me/employees">
        {t("Buttons.GoToEmployees")}
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/me/suppliers">
        {t("Buttons.GoToSuppliers")}
      </Button>
      <Button variant="contained" color="success" component={Link} to="/me/customers">
        {t("Buttons.GoToCustomers")}
      </Button>
    </Stack>
  );
};

export default QuickLinks;