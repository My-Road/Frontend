import { Typography, Box } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { useTranslation } from "react-i18next";
import { bgColors, getSummaryData, iconColors, StyledSummaryCard } from "../constants";
import { Grow } from "@mui/material";
import Loader from "@/components/Loader";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

const SummarySection = () => {
  const { data, isLoading } = useGetDashboardAPI();
  const { t } = useTranslation();
  const isManager = useAppSelector(isManagerRole);

  if (isLoading || !data) {
    return <Loader />;
  }

  const summaryData = getSummaryData(t)
    .filter((item) => {
      const managerKeys = ["employeeCount", "supplierCount", "customerCount"];
      return isManager ? managerKeys.includes(item.valueKey) : true;
    })
    .map((item) => ({
      label: item.label,
      value: data[item.valueKey as keyof typeof data],
      Icon: item.icon,
    }));

  return (
    <Grid container spacing={3}>
      {summaryData.map(({ label, value, Icon }, index) => (
        <Grid key={label + index} size={{ xs: 12, sm: 6, md: 4 }} >
          <Grow in={true} timeout={500 + index * 200}>
            <StyledSummaryCard elevation={3} bgcolor={bgColors[index % bgColors.length]}>
              <Box
                bgcolor={iconColors[index % iconColors.length]}
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
