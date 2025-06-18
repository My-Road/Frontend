import SearchForm from "@/components/SearchForm/SearchForm";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormValues } from "../types";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import dayjs from "dayjs";
import { SearchFormProps } from "@/types";

const LogsSearchForm = ({ setSearchParams, sortsBy }: SearchFormProps) => {
  const handleSubmit = async (values: SearchFormValues) => {
    const filtersArray: string[] = [];

    if (values.startDate) filtersArray.push(`date>=${values.startDate}`);
    if (values.endDate) filtersArray.push(`date<=${values.endDate}`);
    if (values.employeeName)
      filtersArray.push(`employee.fullName@=${values.employeeName}`);
    if (values.address)
      filtersArray.push(`employee.address@=${values.address}`);

    const filters = filtersArray.join(",");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSearchParams?.((prev) => ({
      ...prev,
      filters,
      page: 1,
    }));
  };

  return (
    <SearchForm<SearchFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      setSearchParams={setSearchParams}
      sortsBy={sortsBy}
      renderFields={() => (
        <>
          <TextField name="employeeName" aria-label="Enter a Employee Name" />
          <TextField name="address" aria-label="Enter an address" />
          <DatePickerField
            aria-label="Enter start date"
            name="startDate"
            minDate={dayjs("2000-01-01")}
            maxDate={dayjs("9999-12-30")}
          />
          <DatePickerField
            aria-label="enter end date"
            name="endDate"
            minDate={dayjs("2000-01-01")}
            maxDate={dayjs("9999-12-30")}
          />
        </>
      )}
    />
  );
};

export default LogsSearchForm;
