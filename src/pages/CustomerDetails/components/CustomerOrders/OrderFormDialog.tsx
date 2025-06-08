import { FormikHelpers } from "formik";
import { Box, Grid2 as Grid } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import { CustomerOrderPayload } from "../../types";
import { validationSchema } from "./formSchema";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: CustomerOrderPayload;
  onSubmit: (
    values: CustomerOrderPayload,
    helpers: FormikHelpers<CustomerOrderPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const OrderFormDialog = ({
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
    <GenericFormDialog<CustomerOrderPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={validationSchema}
      formType={formType}
    >
      <Box px={2} py={1}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: isManager? 6: 12 }}>
            <DatePickerField name="orderDate" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              name="recipientName"
              aria-label="enter a valid recipient name"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              name="recipientPhoneNumber"
              aria-label="enter a valid phone number"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              name="quantity"
              aria-label="enter a valid quantity"
              fullWidth
            />
          </Grid>
          {!isManager && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                name="price"
                aria-label="enter a valid price"
                fullWidth
              />
            </Grid>
          )}
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

export default OrderFormDialog;
