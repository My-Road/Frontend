import { FormikHelpers } from "formik";
import TextField from "@/components/Fields/TextField";
import DatePickerField from "@/components/Fields/DatePickerField";
import { initialValues } from "../constants";
import { AddEmployeePayload } from "../types";
import { employeeValidationSchema } from "../formSchema";
import useAddEmployeeAPI from "../hooks/useAddEmployeeAPI";
import CollapsibleForm from "@/components/CollapsibleForm";
import { FC } from "react";

const AddEmployeeForm: FC = () => {
  const { addEmployee, isPending } = useAddEmployeeAPI();

  const onSubmit = (
    values: AddEmployeePayload,
    { resetForm }: FormikHelpers<AddEmployeePayload>
  ) => {
    addEmployee(values, {
      onSuccess: () => resetForm(),
    });
  };

  return (
    <CollapsibleForm<AddEmployeePayload>
      title="Employees.addEmployee"
      initialValues={initialValues}
      validationSchema={employeeValidationSchema}
      onSubmit={onSubmit}
      isPending={isPending}
    >
      <TextField name="employeeName" aria-label="Full Name" />
      <TextField name="phoneNumber" aria-label="Phone Number" />
      <TextField name="address" aria-label="Address" />
      <TextField name="jobTitle" aria-label="Job Title" />
      <DatePickerField name="startDate" aria-label="Start Date" />
    </CollapsibleForm>
  );
};

export default AddEmployeeForm;
