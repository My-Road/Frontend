export interface PrintPDFButtonProps {
  isLoading: boolean;
  onPrint: () => void;
  label?: string;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  fullWidth?: boolean;
}