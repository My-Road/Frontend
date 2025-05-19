import {
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditSupplierInfoForm from "./EditSupplierInfoForm";
import PaymentsSupplierInfo from "./PaymentsSupplierInfo";
import { Supplier } from "@/types";
import { Trans } from "react-i18next";

interface Props {
  supplierData: Supplier ;
}

function PersonalSupplierInfo({ supplierData }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => setIsEditing(!isEditing);

  return (
    <Paper>
      <Stack p={4} gap={4} justifyContent="flex-start">
        <Typography variant="h5" gutterBottom>
          <Trans i18nKey="PrivatePages.Suppliers.supplierInformation">Supplier Information</Trans>
          <IconButton onClick={handleEditClick}>
            {!isEditing && (<EditIcon />)}
          </IconButton>
          <Divider />
        </Typography>
        <EditSupplierInfoForm supplierData={supplierData} isEditing = {isEditing} setIsEditing = {setIsEditing} />
        <PaymentsSupplierInfo supplierPayments={supplierData} />
      </Stack>
    </Paper>
  );
}

export default PersonalSupplierInfo;
