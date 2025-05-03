import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/User";

import { Trans } from "react-i18next";
import { CustomerOrderPayload } from "../../types";
import { initialValues } from "./constants";
import useAddOrderAPI from "../../hooks/useAddOrderAPI";
import AddIcon from "@mui/icons-material/Add";
import OrderFormDialog from "./OrderFormDialog";

interface Props {
  customerId: number;
}

function AddOrderForm({ customerId }: Props) {
  const [open, setOpen] = useState(false);
  const { addOrder, isPending } = useAddOrderAPI();
  const user = useSelector(selectUser);
  const handleClose = () => setOpen(false);

  const handleAdd = (
    values: CustomerOrderPayload,
    helpers: FormikHelpers<CustomerOrderPayload>
  ) => {
    const payload = {
      ...values,
      customerId,
      createdByUserId: Number(user.uid),
    };

    addOrder(payload, {
      onSuccess: () => {
        helpers.resetForm();
        handleClose();
      },
    });
  };

  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        <Trans i18nKey="Buttons.addOrder">Add Order</Trans>
      </Button>

      <OrderFormDialog
        open={open}
        handleClose={handleClose}
        initialValues={initialValues}
        onSubmit={handleAdd}
        isPending={isPending}
        title="PrivatePages.Customers.addOrder"
      />
    </Box>
  );
}

export default AddOrderForm;
