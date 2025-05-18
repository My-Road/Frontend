import { Container, Stack } from "@mui/material";
import AddSupplierForm from "./components/AddSupplierForm";
import SupplierDataGrid from "./components/SupplierDataGrid";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import SearchFormByName from "@/components/SearchFormByName";

export default function Suppliers() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isDeleted",
  });
  return (
    <Container>
      <Stack gap={4}>
        <AddSupplierForm />
        <SearchFormByName
          setSearchParams={setSearchParams}
          name="supplierName"
          sortsBy="isDeleted"
        />
        <SupplierDataGrid searchParams={searchParams} />
      </Stack>
    </Container>
  );
}
