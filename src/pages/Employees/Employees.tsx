import { Container, Stack } from "@mui/material";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EmployeeDataGrid from "./components/EmployeeDataGrid";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";

export default function DataGridDemo() {
  const [searchParams, setSearchParams] = useState<SearchParams>({...DEFAULT_SEARCH_PARAMS, sorts: "-status"});
  return (
    <Container>
      <Stack gap={4}>
        <AddEmployeeForm />
        <SearchForm setSearchParams={setSearchParams} />
        <EmployeeDataGrid searchParams={searchParams} />
      </Stack>
    </Container>
  );
}
