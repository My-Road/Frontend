import TextField from "@/components/Fields/TextField";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { Form } from "formik";
import useUpdateCustomerDataAPI from "../../hooks/useUpdateCustomerDataAPI";
import useDeleteCustomerAPI from "../../hooks/useDeleteCustomerAPI";
import { CustomerData } from "../../types";
import { validationSchema } from "./formSchema";
import { LoadingButton } from "@mui/lab";
import { Dispatch, SetStateAction } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Trans, useTranslation } from "react-i18next";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

interface Props {
  customerData: CustomerData;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

function EditCustomerInfoForm({
  customerData,
  isEditing,
  setIsEditing,
}: Props) {
  const { updateCustomer, isPending } = useUpdateCustomerDataAPI();
  const { deleteCustomer, isPending: isDeleting } = useDeleteCustomerAPI();
  const { t } = useTranslation();
  const { showWarningSnackbar } = useSnackBar();
  const { showConfirmationDialog } = useConfirmationDialog();
  const isManager = useAppSelector(isManagerRole)

  const onSubmit = (values: CustomerData) => {
    const hasChanged = JSON.stringify(values) !== JSON.stringify(customerData);

    if (!hasChanged) {
      setIsEditing(false);
      showWarningSnackbar({
        message: "No changes made",
      });
      return;
    }
    showConfirmationDialog({
      title: t("Dialogs.Title.editCustomer"),
      message: t("Dialogs.confirmCustomerEdit"),
      onConfirm: () =>
        updateCustomer(values, {
          onSuccess: () => setIsEditing(false),
        }),
      isPending,
    });
  };

  const handleCancelClick = () => {
    formikProps.resetForm();
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    formikProps.resetForm();
    showConfirmationDialog({
      title: t("Dialogs.Title.deleteCustomer"),
      message: t("Dialogs.confirmCustomerDelete"),
      onConfirm: () => deleteCustomer(customerData.id),
      isPending: isDeleting
    });
  };

  const formikProps = useFormik({
    initialValues: customerData || "",
    onSubmit,
    validationSchema,
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="customerName" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="email" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="phoneNumber" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="address" disabled={!isEditing} />
          </Grid>
        </Grid>
        <Box mt={2} display="flex" gap={2}>
          {isEditing && (
            <>
              <LoadingButton
                variant="contained"
                color="warning"
                loading={isPending}
                type="submit"
              >
                <Trans i18nKey="Buttons.save">Save</Trans>
              </LoadingButton>
              <Button
                variant="outlined"
                color="error"
                onClick={handleCancelClick}
              >
                <Trans i18nKey="Buttons.cancel">Cancel</Trans>
              </Button>
            </>
          )}
          {!isEditing && !isManager && (
            <LoadingButton
              variant="text"
              onClick={handleDeleteClick}
              loading={isDeleting}
              loadingPosition="center"
            >
              <DeleteIcon color="error" />
            </LoadingButton>
          )}
        </Box>
      </Form>
    </FormikProvider>
  );
}

export default EditCustomerInfoForm;
