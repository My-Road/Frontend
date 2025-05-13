import { FormikHelpers } from "formik";
import TextField from "@/components/Fields/TextField";
import { EmployeeLogPayload } from "../../types";
import { employeeLogValidationSchema } from "./formSchema";
import GenericFormDialog from "@/components/GenericFormDialog";
import DatePickerField from "@/components/Fields/DatePickerField";
import TimePickerField from "@/components/Fields/TimePicker/TimePickerField";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: EmployeeLogPayload;
  onSubmit: (
    values: EmployeeLogPayload,
    helpers: FormikHelpers<EmployeeLogPayload>
  ) => void;
  isPending: boolean;
  title: string;
  formType?: string;
}

const EmployeeLogFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  formType = "add",
}: Props) => {
  return (
    <GenericFormDialog<EmployeeLogPayload>
      open={open}
      handleClose={handleClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isPending={isPending}
      title={title}
      validationSchema={employeeLogValidationSchema}
      formType={formType}
    >
      <DatePickerField name="date" />
      <TimePickerField name="checkIn" />
      <TimePickerField name="checkOut" />
      <TextField name="hourlyWage" aria-label="enter a valid hourlyWage" />
      <TextField
        name="notes"
        multiline
        rows={4}
        aria-label="enter valid notes"
      />
    </GenericFormDialog>
  );
};

export default EmployeeLogFormDialog;
