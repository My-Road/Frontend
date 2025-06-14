import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import { commonButtonSx } from "../constants";
const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 4,
        background: "linear-gradient(to right, #f0f4ff, #ffffff)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ ml: 1, color: "#333" }}
      >
        {t("Dialogs.Title.quickLinks")}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/me/employees"
          endIcon={<BadgeTwoToneIcon />}
          sx={commonButtonSx}
        >
          {t("Buttons.GoToEmployees")}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/me/suppliers"
          endIcon={<InventorySharpIcon />}
          sx={commonButtonSx}
        >
          {t("Buttons.GoToSuppliers")}
        </Button>

        <Button
          variant="outlined"
          color="info"
          component={Link}
          to="/me/customers"
          endIcon={<GroupsIcon />}
          sx={commonButtonSx}
        >
          {t("Buttons.GoToCustomers")}
        </Button>
      </Box>
    </Paper>
  );
};

export default QuickLinks;