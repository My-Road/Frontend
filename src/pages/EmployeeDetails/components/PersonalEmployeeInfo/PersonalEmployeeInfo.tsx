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
import PaymentsEmployeeInfo from "./PaymentsEmployeeInfo";
import { Employee } from "@/types";
import { Trans } from "react-i18next";
import EditEmployeeInfoForm from "./EditEmployeeInfoForm";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowBackButton from "@/components/Buttons/ArrowBackButton/ArrowBackButton";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import AddEmployeeLogForm from "../EmployeeLog/AddEmployeeLogForm";

interface Props {
  employeeData: Employee;
}

function PersonalEmployeeInfo({ employeeData }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => setIsEditing(!isEditing);
  const isManager = useAppSelector(isManagerRole);

  return (
    <Paper>
      <Stack p={4} gap={4} justifyContent="flex-start">
        <Typography variant="h5" gutterBottom>
          <ArrowBackButton path="/me/employees" />
          <Box display="flex" alignContent="center" alignItems="center">
            <PersonOutlineOutlinedIcon fontSize="large" />
            <Trans i18nKey="PrivatePages.Employees.employeeInformation">
              Employee Information
            </Trans>
            {!isManager && (
              <IconButton onClick={handleEditClick}>
                {!isEditing && <EditIcon />}
              </IconButton>
            )}
          </Box>
          <Divider />
        </Typography>
        <EditEmployeeInfoForm
          employeeData={employeeData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        {isManager ? (
          <AddEmployeeLogForm employeeId={employeeData.id} />
        ) : (
          <PaymentsEmployeeInfo employeePayment={employeeData} />
        )}
      </Stack>
    </Paper>
  );
}

export default PersonalEmployeeInfo;
