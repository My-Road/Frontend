import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Trans } from "react-i18next";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormValues } from "./types";
import { Dispatch, SetStateAction } from "react";
import { SearchParams } from "@/types";
import SearchIcon from "@mui/icons-material/Search";
import DatePickerField from "../Fields/DatePickerField";
import dayjs from "dayjs";

interface SearchFormProps {
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
  dateFieldKey: string;
}

const SearchFormByDate: React.FC<SearchFormProps> = ({
  setSearchParams,
  dateFieldKey,
}) => {
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
      sorts: `-${dateFieldKey}`,
    }));
  };

  const handleClearSearch = () => {
    setIsInSearchMode(false);
    formikProps.resetForm();
    setSearchParams({
      page: 1,
      pageSize: 15,
      sorts: `-${dateFieldKey}`,
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SearchIcon />}
            sx={{ minWidth: 100 }}
            disabled={!formikProps.isValid || !formikProps.dirty}
          >
            <Trans i18nKey="Buttons.search">Search</Trans>
          </Button>
          {isInSearchMode && (
            <Button
              type="submit"
              variant="contained"
              color="info"
              onClick={handleClearSearch}
              sx={{ minWidth: 100 }}
            >
              <Trans i18nKey="Buttons.cancel">Clear Search</Trans>
            </Button>
          )}
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SearchFormByDate;
