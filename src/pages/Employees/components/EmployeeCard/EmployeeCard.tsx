import React from "react";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { Employee } from "../types";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeActions from "./EmployeeActions";

const EmployeeCard: React.FC<{ employee: Employee }> = ({ employee }) => {
  const { id, name, phoneNumber, address, idNumber, startDate, salary, email } = employee;
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/employee/${id}`);
  };

  return (
    <Grid size={{ sm: 12, md: 4 }}>
      <Card>
        <EmployeeHeader name={name} />
        <CardContent>
          <EmployeeDetails 
            phoneNumber={phoneNumber} 
            address={address} 
            idNumber={idNumber} 
            startDate={startDate} 
            salary={salary} 
            email={email} 
          />
        </CardContent>
        <EmployeeActions onViewMore={handleViewMore} />
      </Card>
    </Grid>
  );
};

export default EmployeeCard;