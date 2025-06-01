interface TableRow {
  label: string;
  value: string | number | boolean;
}

export interface InvoicePDFProps {
  title: string;
  tableData: TableRow[];
  tableHeader: TableRow[];
}