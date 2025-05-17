import TextField from "@/components/Fields/TextField";
import { initialValues } from "../constants";
import { AddCustomerPayLoad } from "../types";
import { validationSchema } from "../formSchema";
import useAddSupplierAPI from "../hooks/useAddSupplierAPI";
import { FormikHelpers } from "formik";
import CollapsibleForm from "@/components/CollapsibleForm";
import { FC } from "react";

const AddSupplierForm: FC = () => {
  const { addCustomer, isPending } = useAddSupplierAPI();

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
      title="Suppliers.addSupplier"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      isPending={isPending}
    >
      <TextField name="SupplierName" aria-label="enter a valid Supplier name" />
      <TextField name="email" aria-label="enter a valid email" />
      <TextField name="phoneNumber" aria-label="enter a valid phone number" />
      <TextField name="address" aria-label="enter a valid address" />
    </CollapsibleForm>
  );
};

export default AddSupplierForm;
