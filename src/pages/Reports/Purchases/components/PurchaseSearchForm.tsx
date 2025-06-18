import SearchForm from "@/components/SearchForm/SearchForm";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import { SearchFormValues } from "../types";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import dayjs from "dayjs";
import { SearchFormProps } from "@/types";

const PurchaseSearchForm = ({ setSearchParams, sortsBy }: SearchFormProps) => {
  const handleSubmit = async (values: SearchFormValues) => {
    const filtersArray: string[] = [];

    if (values.startDate) filtersArray.push(`purchasesDate>=${values.startDate}`);
    if (values.endDate) filtersArray.push(`purchasesDate<=${values.endDate}`);
    if (values.supplierName)
      filtersArray.push(`supplier.fullName@=${values.supplierName}`);
    if (values.address)
      filtersArray.push(`supplier.address@=${values.address}`);

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
          <TextField name="supplierName" aria-label="Enter a Supplier Name" />
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

export default PurchaseSearchForm;
