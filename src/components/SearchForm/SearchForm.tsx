import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import TextField from "@/components/Fields/TextField";
import { Trans } from "react-i18next";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormValues } from "./types";
import { Dispatch, SetStateAction } from "react";
import { SearchParams } from "@/types";

interface SearchFormProps {
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
  dateFieldKey: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ setSearchParams, dateFieldKey }) => {
  const [isInSearchMode, setIsInSearchMode] = useState(false);
  const onSubmit = (values: SearchFormValues) => {
    setIsInSearchMode(true);

    const filtersArray: string[] = [];

    if (values.startDate) {
      filtersArray.push(`${dateFieldKey}>=${values.startDate}`);
    }

    if (values.endDate) {
      filtersArray.push(`${dateFieldKey}<=${values.endDate}`);
    }

    const filters = filtersArray.join(",");

    setSearchParams((prev: SearchParams) => ({
      ...prev,
      filters,
      page: 1,
    }));
  };

  const handleClearSearch = () => {
    setIsInSearchMode(false);
    formikProps.resetForm();
    setSearchParams({
      page: 1,
      pageSize: 15,
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
          <TextField name="startDate" type="date" />
          <TextField name="endDate" type="date" />
          <Button type="submit" variant="contained" color="primary">
            <Trans i18nKey="Buttons.search">Search</Trans>
          </Button>
          {isInSearchMode && (
            <Button
              type="submit"
              variant="contained"
              color="info"
              onClick={handleClearSearch}
            >
              <Trans i18nKey="Buttons.cancel">Clear Search</Trans>
            </Button>
          )}
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SearchForm;
