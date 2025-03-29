import React from "react";
import { CardHeader, Avatar, Typography } from "@mui/material";
import { Trans } from "react-i18next";

interface EmployeeHeaderProps {
  name: string;
}

const EmployeeHeader: React.FC<EmployeeHeaderProps> = ({ name }) => {
  return (
    <CardHeader
      avatar={<Avatar sx={{ width: 70, height: 70, fontSize: 24 }}>{name.charAt(0)}</Avatar>}
      title={
        <Typography variant="h6" fontWeight={600}>
          <Trans i18nKey="Textfields.name">Employee Name:</Trans> : {name}
        </Typography>
      }
    />
  );
};

export default EmployeeHeader;