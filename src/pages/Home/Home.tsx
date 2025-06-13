import { Typography, Fade, Grow, Box } from "@mui/material";
import { Grid2 as Grid } from "@mui/material"; 
import IncomeExpenseChart from "./components/IncomeExpenseChart";
import ProfitPieChart from "./components/ProfitPieChart";
import QuickLinks from "./components/QuickLinks";
import SummarySection from "./components/SummarySection";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Fade in={true} timeout={600}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom marginLeft={2}>
              {t("Dialogs.Title.dashboardOverview")}
            </Typography>
          </Box>
        </Fade>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true} timeout={600}>
          <Box>
            <SummarySection />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true} timeout={700}>
          <Box>
            <IncomeExpenseChart />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true} timeout={800}>
          <Box>
            <ProfitPieChart />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true} timeout={900}>
          <Box>
            <QuickLinks />
          </Box>
        </Grow>
      </Grid>
    </Grid>
  );
};

export default Home;