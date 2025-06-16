import { Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import IncomeExpenseChart from "./components/IncomeExpenseChart";
import ProfitPieChart from "./components/ProfitPieChart";
import QuickLinks from "./components/QuickLinks";
import SummarySection from "./components/SummarySection";
import { useTranslation } from "react-i18next";
import PageContainer from "@/containers/PageContainer";
import { useGetDashboardAPI } from "./hooks/useGetDashboardAPI";
import Loader from "@/components/Loader";
import BaseCard from "@/components/BaseCard";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

const Home = () => {
  const { t } = useTranslation();
  const { isLoading } = useGetDashboardAPI();
  const isManager = useAppSelector(isManagerRole);
  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <BaseCard timeout={600}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ ml: { xs: 1, sm: 2 } }}
            >
              {t("Dialogs.Title.dashboardOverview")}
            </Typography>
          </BaseCard>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <BaseCard timeout={600}>
            <SummarySection />
          </BaseCard>
        </Grid>
        {!isManager && (
          <>
            <Grid size={{ xs: 12, md: 6 }}>
              <BaseCard timeout={700}>
                <IncomeExpenseChart />
              </BaseCard>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <BaseCard timeout={800}>
                <ProfitPieChart />
              </BaseCard>
            </Grid>
          </>
        )}

        <Grid size={{ xs: 12 }}>
          <BaseCard timeout={900}>
            <QuickLinks />
          </BaseCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Home;
