import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/User";
import { Trans, useTranslation } from "react-i18next";
import { EmployeeLogPayload } from "../../types";
import { initialValues } from "./constants";
import useAddEmployeeLogAPI from "../../hooks/useAddEmployeeLogAPI";
import AddIcon from "@mui/icons-material/Add";
import EmployeeLogFormDialog from "./EmployeeLogFormDialog";

interface Props {
  employeeId: number;
}

function AddEmployeeLogForm({ employeeId }: Props) {
  const [open, setOpen] = useState(false);
  const { addEmployeeLog, isPending } = useAddEmployeeLogAPI();
  const user = useSelector(selectUser);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const handleAdd = (
    values: EmployeeLogPayload,
    helpers: FormikHelpers<EmployeeLogPayload>
  ) => {
    const payload = {
      ...values,
      employeeId,
      hourlyWage: Number(values.hourlyWage),
      notes: values.notes.trim(),
      createdByUserId: Number(user.uid),
    };

    addEmployeeLog(payload, {
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
        <Trans i18nKey="Buttons.addEmployeeLog">Add Employee Log</Trans>
      </Button>

      <EmployeeLogFormDialog
        open={open}
        handleClose={handleClose}
        initialValues={initialValues}
        onSubmit={handleAdd}
        isPending={isPending}
        title={t("PrivatePages.Employees.addEmployeeLog")}
        formType="add"
      />
    </Box>
  );
}

export default AddEmployeeLogForm;
