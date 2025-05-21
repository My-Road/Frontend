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
import EditCustomerInfoForm from "./EditCustomerInfoForm";
import PaymentsCustomerInfo from "./PaymentsCustomerInfo";
import { Customer } from "@/types";
import { Trans } from "react-i18next";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface Props {
  customerData: Customer;
}

function PersonalCustomerInfo({ customerData }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => setIsEditing(!isEditing);

  return (
    <Paper>
      <Stack p={4} gap={4} justifyContent="flex-start">
        <Typography variant="h5" gutterBottom>
          <Box display="flex" alignContent="center" alignItems="center">
            <PersonOutlineOutlinedIcon fontSize="large" />
            <Trans i18nKey="PrivatePages.Customers.customerInformation">
              Customer Information
            </Trans>
            <IconButton onClick={handleEditClick}>
              {!isEditing && <EditIcon />}
            </IconButton>
          </Box>
          <Divider />
        </Typography>
        <EditCustomerInfoForm
          customerData={customerData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <PaymentsCustomerInfo customerPayments={customerData} />
      </Stack>
    </Paper>
  );
}

export default PersonalCustomerInfo;
