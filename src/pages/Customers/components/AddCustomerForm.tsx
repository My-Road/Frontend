import { useState } from "react";
import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import { FormikHelpers, FormikProvider, useFormik, Form } from "formik";

import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import { initialValues } from "../constants";
import { AddCustomerPayLoad } from "../types";
import { validationSchema } from "../formSchema";
import useAddCustomerAPI from "../hooks/useAddCustomerAPI";

function AddCustomerForm() {
  const [expanded, setExpanded] = useState(false);
  const { addCustomer, isPending } = useAddCustomerAPI();

  const handleCancel = () => {
    setExpanded(false);
  };

  const onSubmit = async (
    values: AddCustomerPayLoad,
    { resetForm }: FormikHelpers<AddCustomerPayLoad>
  ) => {
    console.log(values);
    addCustomer(values, {
      onSuccess: () => {
        resetForm();
      },
    });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Paper sx={{ p: 2, mt: 5 }}>
      <Collapse in={!expanded}>
        <Box onClick={() => setExpanded(true)} sx={{ cursor: "pointer" }}>
          <Trans i18nKey="PublicPages.Customers.addCustomer"></Trans>
        </Box>
      </Collapse>
      <Collapse in={expanded}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" my={3}>
          <Trans i18nKey="PublicPages.Customers.addCustomer"></Trans>
        </Typography>
        <FormikProvider value={formikProps}>
          <Form>
            <Stack gap={2}>
              <TextField name="fullName" aria-label="enter a valid customer name" />
              <TextField name="email" aria-label="enter a valid email" />
              <TextField name="phoneNumber" aria-label="enter a valid phone number" />
              <TextField name="address" aria-label="enter a valid address" />
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  loading={isPending}
                >
                  <Trans i18nKey="Buttons.add">Reset</Trans>
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

export default AddCustomerForm;
