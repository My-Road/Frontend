import SearchForm from "@/components/SearchForm/SearchForm";
import { SearchFormValues } from "../types";
import TextField from "@/components/Fields/TextField";
import { SearchFormProps } from "@/types";
import { SearchFormSchema } from "../formSchema";
import { initialSearchValues, options } from "../constants";
import SelectField from "@/components/Fields/SelectField";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

const CustomerSearchForm = ({ setSearchParams, sortsBy }: SearchFormProps) => {
  const isManager = useAppSelector(isManagerRole);
  const handleSubmit = async (values: SearchFormValues) => {
    const filtersArray: string[] = [];

    if (values.customerName)
      filtersArray.push(`fullName@=${values.customerName}`);

    if (values.status !== "all") filtersArray.push(`RemainingAmount > 0`);

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
      initialValues={initialSearchValues}
      validationSchema={SearchFormSchema}
      onSubmit={handleSubmit}
      setSearchParams={setSearchParams}
      sortsBy={sortsBy}
      renderFields={() => (
        <>
          <TextField name="customerName" aria-label="Enter a Customer Name" />
          {!isManager && (
            <SelectField
              name="status"
              options={options}
            />
          )}
        </>
      )}
    />
  );
};

export default CustomerSearchForm;
