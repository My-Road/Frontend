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
}

const PaymentFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
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
    >
      <TextField name="amount" aria-label="Enter a valid amount" />
      <TextField name="notes" aria-label="Enter a valid notes" />
    </GenericFormDialog>
  );
};

export default PaymentFormDialog;
