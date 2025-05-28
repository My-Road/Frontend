import React, { useState } from "react";
import { Paper, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import SearchInput from "./SearchInput";
import { Trans, useTranslation } from "react-i18next";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormProps, SearchFormValues } from "./types";
import { SearchParams } from "@/types";
import SearchIcon from "@mui/icons-material/Search";
import { LoadingButton } from "@mui/lab";

const SearchFormByUsers: React.FC<SearchFormProps> = ({
  setSearchParams,
  name,
  sortsBy,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (values: SearchFormValues) => {
    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    setSearchParams((prev: SearchParams) => ({
      ...prev,
      filters: `firstName@=${values.fullName}`,
      page: 1,
      sorts: sortsBy,
    }));
    setIsSearching(false);
  };
 
  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { values, resetForm, handleChange } = formikProps;
  const isSearchDisabled = !values.fullName || values.fullName.trim() === "";

  const handleClearSearch = () => {
    resetForm();
    setSearchParams({
      page: 1,
      pageSize: 15,
      sorts: sortsBy,
    });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 4,
        my: 5,
      }}
    >
      <FormikProvider value={formikProps}>
        <Form>
          <Stack
            flexDirection={{ sm: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <SearchInput
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              label={t(`Textfields.${name}`)}
              onClear={handleClearSearch}
              isClearVisible={!isSearchDisabled}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              color="info"
              endIcon={<SearchIcon />}
              disabled={isSearchDisabled}
              loading={isSearching}
            >
              <Trans i18nKey="Buttons.search">Search</Trans>
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Paper>
  );
};

export default SearchFormByUsers;
