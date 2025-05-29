import React, { useState } from "react";
import { Paper, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import SearchInput from "@/components/SearchFormByName/SearchInput";
import { Trans, useTranslation } from "react-i18next";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormProps } from "@/components/SearchFormByName/types";
import { SearchParams } from "@/types";
import SearchIcon from "@mui/icons-material/Search";
import { LoadingButton } from "@mui/lab";
import DatePickerField from "@/components/Fields/DatePickerField";
import dayjs from "dayjs";
import { SearchFormValues } from "./types";

const SearchFormByName: React.FC<SearchFormProps> = ({
  setSearchParams,
  name,
  sortsBy,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (values: SearchFormValues) => {
    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    const filtersArray: string[] = [];

    if (values.startDate) {
      filtersArray.push(`orderDate>=${values.startDate}`);
    }

    if (values.endDate) {
      filtersArray.push(`orderDate<=${values.endDate}`);
    }

    if (values.recipientName) {
      filtersArray.push(`recipientName@=${values.recipientName}`);
    }
    const filters = filtersArray.join(",");
    console.log(filters);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSearchParams((prev: SearchParams) => ({
      ...prev,
      filters,
      page: 1,
    }));
    setIsSearching(false);
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { values, resetForm, handleChange } = formikProps;
  const isSearchDisabled =
    !values.recipientName || values.recipientName.trim() === "";

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
              name="recipientName"
              value={values.recipientName}
              onChange={handleChange}
              label={t(`Textfields.${name}`)}
              onClear={handleClearSearch}
              isClearVisible={!isSearchDisabled}
            />
            <DatePickerField
              name="startDate"
              minDate={dayjs("2000-01-01")}
              maxDate={dayjs("9999-12-30")}
            />
            <DatePickerField
              name="endDate"
              minDate={dayjs("2000-01-01")}
              maxDate={dayjs("9999-12-30")}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              color="info"
              endIcon={<SearchIcon />}
              disabled={isSearchDisabled}
              loading={isSearching}
              sx={{ minWidth: "120px" }}
            >
              <Trans i18nKey="Buttons.search">Search</Trans>
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Paper>
  );
};

export default SearchFormByName;
