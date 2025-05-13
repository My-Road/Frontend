import { useState } from "react";
import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import { FormikHelpers, FormikProvider, useFormik, Form } from "formik";
import useAddEmployeeAPI from "../hooks/useAddEmployeeAPI";
import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import { initialValues } from "../constants";
import { AddEmployeePayload } from "../types";
import { employeeValidationSchema } from "../formSchema";
import AddIcon from "@mui/icons-material/Add";
import DatePickerField from "@/components/Fields/DatePickerField";

function AddEmployeeForm() {
  const [expanded, setExpanded] = useState(false);
  const { addEmployee, isPending } = useAddEmployeeAPI();

  const handleCancel = () => {
    setExpanded(false);
    formikProps.resetForm();
  };

  const onSubmit = (
    values: AddEmployeePayload,
    { resetForm }: FormikHelpers<AddEmployeePayload>
  ) => {
    addEmployee(values, {
      onSuccess: () => {
        resetForm();
      },
    });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema: employeeValidationSchema,
  });

  return (
    <Paper sx={{ p: 2, mt: 5 }}>
      <Collapse in={!expanded}>
        <Box onClick={() => setExpanded(true)} sx={{ cursor: "pointer" }}>
          <Trans i18nKey="PublicPages.Employees.addEmployee" />
        </Box>
      </Collapse>
      <Collapse in={expanded}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" my={3}>
          <Trans i18nKey="PublicPages.Employees.addEmployee" />
        </Typography>
        <FormikProvider value={formikProps}>
          <Form>
            <Stack gap={2}>
              <TextField name="employeeName" aria-label="Full Name" />
              <TextField name="phoneNumber" aria-label="Phone Number" />
              <TextField name="address" aria-label="Address" />
              <TextField name="jobTitle" aria-label="Job Title" />
              <DatePickerField name="startDate" aria-label="Start Date" />
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<AddIcon />}
                  loading={isPending}
                >
                  <Trans i18nKey="Buttons.add">Add</Trans>
                </LoadingButton>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCancel}
                >
                  <Trans i18nKey="Buttons.cancel">Cancel</Trans>
                </Button>
              </Stack>
            </Stack>
          </Form>
        </FormikProvider>
      </Collapse>
    </Paper>
  );
}

export default AddEmployeeForm;
