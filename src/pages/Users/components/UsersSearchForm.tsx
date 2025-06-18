import SearchForm from "@/components/SearchForm/SearchForm";
import { SearchFormValues } from "./types";
import TextField from "@/components/Fields/TextField";
import { SearchFormProps } from "@/types";
import { initialValues } from "./constants";
import { validationSchema } from "./formSchema";

const UsersSearchForm = ({ setSearchParams, sortsBy }: SearchFormProps) => {
  const handleSubmit = async (values: SearchFormValues) => {
    const filtersArray: string[] = [];

    if (values.firstName) filtersArray.push(`firstName@=${values.firstName}`);
    if (values.email) filtersArray.push(`email@=${values.email}`);

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
          <TextField name="firstName" aria-label="Enter a Customer Name" />
          <TextField name="email" aria-label="Enter an address" />
        </>
      )}
    />
  );
};

export default UsersSearchForm;
