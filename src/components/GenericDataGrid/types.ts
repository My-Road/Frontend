import { GridColDef } from "@mui/x-data-grid";
import { PaginationProps } from "@/types";

export interface GenericDataGridProps<T> {
  rows: T[];
  columns: GridColDef[];
  paginationModel: PaginationProps;
  onPaginationChange: (model: PaginationProps) => void;
  rowCount: number;
  loading: boolean;
  height?: string
}