import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Trans } from "react-i18next";
const StyledText = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: "22px",
  fontWeight: 700,
  transition: "0.3s",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

interface ButtonTextProps {
  text: string;
}

const ButtonText: React.FC<ButtonTextProps> = () => {
  return <StyledText><Trans i18nKey="Buttons.addNewEmployees"></Trans></StyledText>;
};

export default ButtonText;