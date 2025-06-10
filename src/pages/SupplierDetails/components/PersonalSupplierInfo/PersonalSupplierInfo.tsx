import {
  Box,
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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowBackButton from "@/components/Buttons/ArrowBackButton/ArrowBackButton";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import AddPurchaseForm from "../Purchases/AddPurchaseForm";

interface Props {
  supplierData: Supplier;
}

function PersonalSupplierInfo({ supplierData }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => setIsEditing(!isEditing);
  const isManager = useAppSelector(isManagerRole);

  return (
    <Paper>
      <Stack p={4} gap={4} justifyContent="flex-start">
        <Typography variant="h5" gutterBottom>
          <ArrowBackButton path="/me/suppliers" />
          <Box display="flex" alignContent="center" alignItems="center">
            <PersonOutlineOutlinedIcon fontSize="large" />
            <Trans i18nKey="PrivatePages.Suppliers.supplierInformation">
              Supplier Information
            </Trans>
            {!isManager && (
              <IconButton onClick={handleEditClick}>
                {!isEditing && <EditIcon />}
              </IconButton>
            )}
          </Box>
          <Divider />
        </Typography>
        <EditSupplierInfoForm
          supplierData={supplierData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        {isManager ? (
          <AddPurchaseForm supplierId={supplierData.id} />
        ) : (
          <PaymentsSupplierInfo supplierPayments={supplierData} />
        )}
      </Stack>
    </Paper>
  );
}

export default PersonalSupplierInfo;
