import TextField from "@/components/Fields/TextField";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { Form } from "formik";
import useUpdateEmployeeDataAPI from "../../hooks/useUpdateEmployeeDataAPI";
import useDeleteEmployeeAPI from "../../hooks/useDeleteEmployeeAPI";
import { EmployeeData } from "../../types";
import { employeeValidationSchema } from "./formSchema";
import { LoadingButton } from "@mui/lab";
import { Dispatch, SetStateAction } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Trans, useTranslation } from "react-i18next";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import DatePickerField from "@/components/Fields/DatePickerField";

interface Props {
  employeeData: EmployeeData;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

function EditEmployeeInfoForm({
  employeeData,
  isEditing,
  setIsEditing,
}: Props) {
  const { updateEmployee, isPending } = useUpdateEmployeeDataAPI();
  const { deleteEmployee, isPending: isDeleting } = useDeleteEmployeeAPI();
  const { t } = useTranslation();
  const { showWarningSnackbar } = useSnackBar();
  const { showConfirmationDialog } = useConfirmationDialog();

  const onSubmit = (values: EmployeeData) => {
    const hasChanged = JSON.stringify(values) !== JSON.stringify(employeeData);

    if (!hasChanged) {
      setIsEditing(false);
      showWarningSnackbar({
        message: "No changes made",
      });
      return;
    }
    showConfirmationDialog({
      title: t("Dialogs.Title.editEmployee"),
      message: t("Dialogs.confirmEmployeeEdit"),
      onConfirm: () =>
        updateEmployee(values, {
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
      title: t("Buttons.deleteEmployee"),
      message: t("Dialogs.confirmEmployeeDelete"),
      onConfirm: () => deleteEmployee(employeeData.id),
      isPending: isDeleting,
    });
  };

  const formikProps = useFormik({
    initialValues: employeeData || "",
    onSubmit,
    validationSchema: employeeValidationSchema,
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="employeeName" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="jobTitle" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="phoneNumber" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField name="address" disabled={!isEditing} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <DatePickerField name="startDate" disabled={!isEditing} />
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
          {!isEditing && (
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

export default EditEmployeeInfoForm;
