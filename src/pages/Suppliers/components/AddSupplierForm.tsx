import TextField from "@/components/Fields/TextField";
import { initialValues } from "../constants";
import { AddSupplierPayLoad } from "../types";
import { validationSchema } from "../formSchema";
import useAddSupplierAPI from "../hooks/useAddSupplierAPI";
import { FormikHelpers } from "formik";
import CollapsibleForm from "@/components/CollapsibleForm";
import { FC } from "react";

const AddSupplierForm: FC = () => {
  const { addSupplier, isPending } = useAddSupplierAPI();

  const onSubmit = (
    values: AddSupplierPayLoad,
    { resetForm }: FormikHelpers<AddSupplierPayLoad>
  ) => {
    console.log(values);
    addSupplier(values, {
      onSuccess: () => resetForm(),
    });
  };

  return (
    <CollapsibleForm<AddSupplierPayLoad>
      title="Suppliers.addSupplier"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      isPending={isPending}
    >
      <TextField name="supplierName" aria-label="enter a valid Supplier name" />
      <TextField name="email" aria-label="enter a valid email" />
      <TextField name="phoneNumber" aria-label="enter a valid phone number" />
      <TextField name="address" aria-label="enter a valid address" />
    </CollapsibleForm>
  );
};

export default AddSupplierForm;