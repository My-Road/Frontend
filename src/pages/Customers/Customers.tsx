import { Container, Stack } from "@mui/material";
import AddCustomerForm from "./components/AddCustomerForm";
import CustomerDataGrid from "./components/CustomerDataGrid";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from "react";
import { SearchParams } from "@/types";

export default function DataGridDemo() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    page: 1,
    pageSize: 15,
    filters: "",
  });
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
