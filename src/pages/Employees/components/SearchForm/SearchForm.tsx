import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import TextField from "@/components/Fields/TextField";
import { Trans } from "react-i18next";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormValues } from "./types";
import { SearchParams } from "@/types";
import { Dispatch, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFormProps {
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ setSearchParams }) => {
  const [isInSearchMode, setIsInSearchMode] = useState(false);

  const onSubmit = (values: SearchFormValues) => {
    setIsInSearchMode(true);
    setSearchParams((prev: SearchParams) => ({
      ...prev,
      filters: `FullName@=${values.employeeName}`,
      page: 1,
    }));
  };

  const handleClearSearch = () => {
    setIsInSearchMode(false);
    formikProps.resetForm();
    setSearchParams({
      page: 1,
      pageSize: 10,
    });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Stack
          flexDirection={{ sm: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <TextField name="employeeName" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SearchIcon />}
          >
            <Trans i18nKey="Buttons.search">Search</Trans>
          </Button>
          {isInSearchMode && (
            <Button
              type="button"
              variant="contained"
              color="info"
              onClick={handleClearSearch}
              disabled={!formikProps.isValid || !formikProps.dirty}
            >
              <Trans i18nKey="Buttons.cancel">Cancel</Trans>
            </Button>
          )}
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SearchForm;
