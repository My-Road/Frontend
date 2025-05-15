import { Container, Stack } from "@mui/material";
import AddCustomerForm from "./components/AddCustomerForm";
import CustomerDataGrid from "./components/CustomerDataGrid";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import SearchFormByName from "@/components/SearchFormByName";

export default function DataGridDemo() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isDeleted",
  });
  return (
    <Container>
      <Stack gap={4}>
        <AddCustomerForm />
        <SearchFormByName
          setSearchParams={setSearchParams}
          name="customerName"
          sortsBy="isDeleted"
        />
        <CustomerDataGrid searchParams={searchParams} />
      </Stack>
    </Container>
  );
}
