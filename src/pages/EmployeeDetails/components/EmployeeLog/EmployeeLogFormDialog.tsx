import { FormikHelpers } from "formik";
import { Box, Grid2 as Grid } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import TimePickerField from "@/components/Fields/TimePicker/TimePickerField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import { EmployeeLogPayload } from "../../types";
import { employeeLogValidationSchema } from "./formSchema";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: EmployeeLogPayload;
  onSubmit: (
    values: EmployeeLogPayload,
    helpers: FormikHelpers<EmployeeLogPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const EmployeeLogFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}: Props) => {
  const isManager = useAppSelector(isManagerRole);

  return (
    <GenericFormDialog<EmployeeLogPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={employeeLogValidationSchema}
      formType={formType}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: !isManager ? 6 : 12 }}>
            <DatePickerField name="date" />
          </Grid>
          {!isManager && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                name="hourlyWage"
                aria-label="enter a valid hourly wage"
                fullWidth
              />
            </Grid>
          )}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TimePickerField name="checkIn" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TimePickerField name="checkOut" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              name="notes"
              multiline
              rows={4}
              aria-label="enter valid notes"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </GenericFormDialog>
  );
};

export default EmployeeLogFormDialog;
