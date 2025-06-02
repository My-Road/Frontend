import { useState } from "react";
import { Button, Paper, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Trans } from "react-i18next";
import { GenericSearchFormProps } from "./types";
import SearchButton from "../Buttons/SearchButton/SearchButton";

const SearchForm = <T extends object>({
  initialValues,
  validationSchema,
  onSubmit,
  renderFields,
  sortsBy,
  setSearchParams,
}: GenericSearchFormProps<T>) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  const formikProps = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setIsSearching(true);
      await onSubmit(values);
      setIsSearching(false);
      setSearchMode(true);
    },
  });

  const { values, resetForm } = formikProps;

  const isAnyFieldFilled = Object.values(values).some((value) =>
    typeof value === "string" ? value.trim() : Boolean(value)
  );

  const handleClearSearch = () => {
    resetForm();
    setSearchMode(false);
    setSearchParams?.({
      page: 1,
      pageSize: 15,
      sorts: sortsBy,
    });
  };

  return (
    <Paper
      elevation={4}
      sx={{ p: 4, borderRadius: 4, my: 5, bgcolor: "white" }}
    >
      <FormikProvider value={formikProps}>
        <Form>
          <Stack
            flexDirection={{ sm: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {renderFields()}
            <SearchButton
              disabled={!isAnyFieldFilled || isSearching}
              loading={isSearching}
            />
            {searchMode && (
              <Button
                onClick={handleClearSearch}
                variant="outlined"
                color="secondary"
                sx={{ minWidth: "120px" }}
              >
                <Trans i18nKey="Buttons.reset">Reset</Trans>
              </Button>
            )}
          </Stack>
        </Form>
      </FormikProvider>
    </Paper>
  );
};

export default SearchForm;
