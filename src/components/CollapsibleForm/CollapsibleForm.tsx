import { useState } from "react";
import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import { FormikProvider, useFormik, Form, FormikValues } from "formik";
import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { CollapsibleFormProps } from "./types";

const CollapsibleForm = <T extends FormikValues>({
  title,
  initialValues,
  validationSchema,
  onSubmit,
  isPending = false,
  children,
}: CollapsibleFormProps<T>): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const formikProps = useFormik<T>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleCancel = () => {
    setExpanded(false);
    formikProps.resetForm();
  };

  const collapseTitle = `PublicPages.${title}`;

  return (
    <Paper sx={{ p: 2, mt: 5 }}>
      <Collapse in={!expanded}>
        <Box onClick={() => setExpanded(true)} sx={{ cursor: "pointer" }}>
          <Trans i18nKey={collapseTitle} />
        </Box>
      </Collapse>
      <Collapse in={expanded}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" my={3}>
          <Trans i18nKey={collapseTitle} />
        </Typography>
        <FormikProvider value={formikProps}>
          <Form>
            <Stack gap={2}>
              {children}
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  loading={isPending}
                  endIcon={<AddIcon />}
                  // disabled={!formikProps.isValid || !formikProps.dirty}
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
};

export default CollapsibleForm;
