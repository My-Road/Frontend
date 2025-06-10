import SearchForm from "@/components/SearchForm/SearchForm";
import { SearchFormValues } from "../types";
import TextField from "@/components/Fields/TextField";
import { SearchFormProps } from "@/components/SearchFormByName/types";
import { SearchFormSchema } from "../formSchema";
import { initialSearchValues } from "../constants";
import SelectField from "@/components/Fields/SelectField";

const CustomerSearchForm = ({ setSearchParams, sortsBy }: SearchFormProps) => {
  const handleSubmit = async (values: SearchFormValues) => {
    const filtersArray: string[] = [];

    if (values.customerName)
      filtersArray.push(`fullName@=${values.customerName}`);
    if (values.status === "hasDue") filtersArray.push(`RemainingAmount > 0`);

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
          <SelectField
            name="status"
            options={[
              { value: "all", label: "all" },
              { value: "hasDue", label: "hasDue" },
            ]}
          />
        </>
      )}
    />
  );
};

export default CustomerSearchForm;
