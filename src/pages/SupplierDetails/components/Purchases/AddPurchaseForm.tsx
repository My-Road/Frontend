import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/User";
import { Trans, useTranslation } from "react-i18next";
import { PurchasesPayload } from "../../types";
import { initialValues } from "./constants";
import useAddPurchaseAPI from "../../hooks/useAddPurchaseAPI";
import AddIcon from "@mui/icons-material/Add";
import PurchaseFormDialog from "./PurchaseFormDialog";

interface Props {
  supplierId: number;
}

function AddPurchaseForm({ supplierId }: Props) {
  const [open, setOpen] = useState(false);
  const { addPurchase, isPending } = useAddPurchaseAPI();
  const user = useSelector(selectUser);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const handleAdd = (
    values: PurchasesPayload,
    helpers: FormikHelpers<PurchasesPayload>
  ) => {
    const payload = {
      ...values,
      supplierId,
      notes: values.notes.trim(),
      createdByUserId: Number(user.uid),
    };

    addPurchase(payload, {
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
        <Trans i18nKey="Buttons.addPurchases">Add Purchase</Trans>
      </Button>

      <PurchaseFormDialog
        open={open}
        handleClose={handleClose}
        initialValues={initialValues}
        onSubmit={handleAdd}
        isPending={isPending}
        title={t("PrivatePages.Suppliers.addPurchases")}
        formType="add"
      />
    </Box>
  );
}

export default AddPurchaseForm;
