import React from "react";
import { Box, Typography } from "@mui/material";
import { Trans } from "react-i18next";

// استيراد الأيقونات
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";

interface EmployeeDetailsProps {
  phoneNumber: string;
  address: string;
  idNumber: string;
  startDate: string;
  salary: number;
  email: string;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ phoneNumber, address, idNumber, startDate, salary, email }) => {
  const employeeDetails = [
    { icon: <PhoneIcon color="primary" />, label: "Textfields.phoneNumber", value: `:${phoneNumber}` },
    { icon: <HomeIcon color="primary" />, label: "Textfields.address", value: `:${address}` },
    { icon: <CreditCardIcon color="primary" />, label: "Textfields.idNum", value: `:${idNumber}` },
    { icon: <CalendarTodayIcon color="primary" />, label: "Textfields.startDate", value: `:${startDate}` },
    { icon: <AttachMoneyIcon color="primary" />, label: "Textfields.salary", value: `:${salary}` },
    { icon: <EmailIcon color="primary" />, label: "Textfields.email", value: `: ${email}` }
];

  return (
    <>
      {employeeDetails.map((detail, index) => (
        <Box key={index} display="flex" alignItems="center" gap={1} mt={index === 0 ? 0 : 1}>
          {detail.icon}
          <Typography variant="body2" color="textSecondary">
            <Trans i18nKey={detail.label}>{detail.label.replace("Textfields.", "")}:</Trans> {detail.value}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default EmployeeDetails;