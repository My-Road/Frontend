import { SearchParams } from "@/types";
import { Dispatch, SetStateAction } from "react";

export interface SearchFormValues {
  fullName: string;
}

export interface SearchFormProps {
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
  name: string;
  sortsBy: string;
}
