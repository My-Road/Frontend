import { FormikHelpers } from "formik";
import { Box, Grid2 as Grid } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import GenericFormDialog from "@/components/GenericFormDialog";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import { PurchasesPayload } from "../../types";
import { validationSchema } from "./formSchema";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: PurchasesPayload;
  onSubmit: (
    values: PurchasesPayload,
    helpers: FormikHelpers<PurchasesPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const PurchaseFormDialog = ({
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
    <GenericFormDialog<PurchasesPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={validationSchema}
      formType={formType}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: isManager ? 6 : 12 }}>
            <DatePickerField name="purchasesDate" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              name="goodsDeliverer"
              aria-label="enter a valid goodsDeliverer name"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              name="goodsDelivererPhoneNumber"
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

export default PurchaseFormDialog;
