import {
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
  
  interface Props {
    employeeData: Employee;
  }
  
  function PersonalEmployeeInfo({ employeeData }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => setIsEditing(!isEditing);
  
    return (
      <Paper>
        <Stack p={4} gap={4} justifyContent="flex-start">
          <Typography variant="h5" gutterBottom>
            <Trans i18nKey="PrivatePages.Employees.employeeInformation">
              Employee Information
            </Trans>
            <IconButton onClick={handleEditClick}>
              {!isEditing && <EditIcon />}
            </IconButton>
            <Divider />
          </Typography>
          <EditEmployeeInfoForm
            employeeData={employeeData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
          <PaymentsEmployeeInfo
           employeePayment={employeeData}
          />
        </Stack>
      </Paper>
    );
  }
  
  export default PersonalEmployeeInfo;
  
  