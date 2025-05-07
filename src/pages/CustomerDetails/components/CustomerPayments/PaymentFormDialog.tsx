import { FormikHelpers } from "formik";
import TextField from "@/components/Fields/TextField";
import { CustomerPaymentPayload } from "../../types";
import { paymentValidationSchema } from "./formSchema";
import GenericFormDialog from "@/components/GenericFormDialog";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: CustomerPaymentPayload;
  onSubmit: (
    values: CustomerPaymentPayload,
    helpers: FormikHelpers<CustomerPaymentPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const PaymentFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add"
}: Props) => {
  return (
    <GenericFormDialog<CustomerPaymentPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={paymentValidationSchema}
      formType={formType}
    >
      <TextField name="amount" aria-label="Enter a valid amount" />
      <TextField name="notes" multiline rows={4} aria-label="Enter a valid notes" />
    </GenericFormDialog>
  );
};

export default PaymentFormDialog;
