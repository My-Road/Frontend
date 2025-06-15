import SearchForm from "@/components/SearchForm/SearchForm";
import TextField from "@/components/Fields/TextField";
import SelectField from "@/components/Fields/SelectField";
import { SearchFormProps } from "@/components/SearchFormByName/types";
import { SearchFormValues } from "../types";
import { SearchFormSchema } from "../formSchema";
import { initialSearchValues } from "../constants";

const EmployeeSearchForm = ({ setSearchParams, sortsBy }: SearchFormProps) => {
  const handleSubmit = async (values: SearchFormValues) => {
    const filtersArray: string[] = [];

    if (values.employeeName)
      filtersArray.push(`employeeName@=${values.employeeName}`);

    if (values.status !== "all")
      filtersArray.push(`RemainingAmount > 0`);

    const filters = filtersArray.join(",");

    await new Promise((resolve) => setTimeout(resolve, 500));

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
          <TextField name="employeeName" aria-label="Enter Employee Name" />
          <SelectField
            name="status"
            options={[
              { value: "all", label: "all" },
              { value: "employeeHasReceivable", label: "employeeHasReceivable" },
            ]}
          />
        </>
      )}
    />
  );
};

export default EmployeeSearchForm;
