import { FormikHelpers } from "formik";
import TextField from "@/components/Fields/TextField";
import { CustomerOrderPayload } from "../../types";
import { validationSchema } from "./formSchema";
import GenericFormDialog from "@/components/GenericFormDialog";
import DatePickerField from "@/components/Fields/DatePickerField";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: CustomerOrderPayload;
  onSubmit: (
    values: CustomerOrderPayload,
    helpers: FormikHelpers<CustomerOrderPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const OrderFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}: Props) => {
  const isManager = useAppSelector(isManagerRole);

  return (
    <GenericFormDialog<CustomerOrderPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={validationSchema}
      formType={formType}
    >
      <DatePickerField name="orderDate" />
      <TextField
        name="recipientName"
        aria-label="enter a valid recipient name"
      />
      <TextField
        name="recipientPhoneNumber"
        aria-label="enter a valid phone number"
      />
      <TextField name="quantity" aria-label="enter a valid quantity" />
      {!isManager && (
        <TextField name="price" aria-label="enter a valid price" />
      )}
      <TextField
        name="notes"
        multiline
        rows={4}
        aria-label="enter valid notes"
      />
    </GenericFormDialog>
  );
};

export default OrderFormDialog;
