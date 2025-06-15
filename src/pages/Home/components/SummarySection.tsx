import {  Typography, Box } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { useTranslation } from "react-i18next";
import { getSummaryData ,StyledSummaryCard  } from "../constants";
import { Grow } from "@mui/material";
import Loader from "@/components/Loader";

const SummarySection = () => {
  const { data, isLoading } = useGetDashboardAPI();
  const { t } = useTranslation();

  if (isLoading || !data) {
    return <Loader/>;
  }

  const summaryData = getSummaryData(t).map((item) => ({
    label: item.label,
    value: data[item.valueKey as keyof typeof data],
    Icon: item.icon,
  }));

  return (
    <Grid container spacing={3}>
      {summaryData.map(({ label, value, Icon }, index) => (
        <Grid key={label + index} size={{ xs: 12, sm: 6, md: 4 }}>
          <Grow in={true} timeout={500 + index * 200}>
            <StyledSummaryCard elevation={3}>
              <Box
                bgcolor="primary.main"
                color="white"
                p={1.5}
                borderRadius={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={48}
                height={48}
              >
                <Icon fontSize="medium" />
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {label}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {value}
                </Typography>
              </Box>
            </StyledSummaryCard>
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummarySection;
