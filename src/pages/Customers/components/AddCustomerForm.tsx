import TextField from "@/components/Fields/TextField";
import { initialValues } from "../constants";
import { AddCustomerPayLoad } from "../types";
import { validationSchema } from "../formSchema";
import useAddCustomerAPI from "../hooks/useAddCustomerAPI";
import { FormikHelpers } from "formik";
import CollapsibleForm from "@/components/CollapsibleForm";
import { FC } from "react";

const AddCustomerForm: FC = () => {
  const { addCustomer, isPending } = useAddCustomerAPI();

  const onSubmit = (
    values: AddCustomerPayLoad,
    { resetForm }: FormikHelpers<AddCustomerPayLoad>
  ) => {
    console.log(values);
    addCustomer(values, {
      onSuccess: () => resetForm(),
    });
  };

  return (
    <CollapsibleForm<AddCustomerPayLoad>
      title="Customers.addCustomer"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      isPending={isPending}
    >
      <TextField name="customerName" aria-label="enter a valid customer name" />
      <TextField name="email" aria-label="enter a valid email" />
      <TextField name="phoneNumber" aria-label="enter a valid phone number" />
      <TextField name="address" aria-label="enter a valid address" />
    </CollapsibleForm>
  );
};

export default AddCustomerForm;
