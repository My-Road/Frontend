import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import PrintIcon from "@mui/icons-material/Print";
import { PrintPDFButtonProps } from "./types";

const PrintPDFButton: React.FC<PrintPDFButtonProps> = ({
  isLoading,
  onPrint,
  label = "Buttons.print",
  color = "secondary",
  fullWidth = false,
}) => {
  return (
    <LoadingButton
      loading={isLoading}
      variant="contained"
      color={color}
      onClick={onPrint}
      fullWidth={fullWidth}
      startIcon={<PrintIcon />}
    >
      <Trans i18nKey={label}>Print</Trans>
    </LoadingButton>
  );
};

export default PrintPDFButton;
