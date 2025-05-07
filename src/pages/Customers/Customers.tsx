import { Container, Stack } from "@mui/material";
import AddCustomerForm from "./components/AddCustomerForm";
import CustomerDataGrid from "./components/CustomerDataGrid";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";

export default function DataGridDemo() {
  const [searchParams, setSearchParams] = useState<SearchParams>(DEFAULT_SEARCH_PARAMS);
  return (
    <Container>
      <Stack gap={4}>
        <AddCustomerForm />
        <SearchForm setSearchParams={setSearchParams} />
        <CustomerDataGrid searchParams={searchParams} />
      </Stack>
    </Container>
  );
}
