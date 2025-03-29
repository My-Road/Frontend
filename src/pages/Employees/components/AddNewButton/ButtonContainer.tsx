import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ButtonContainerProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled(Box)(({ theme }) => ({
  backgroundColor: "#1070B8",
  borderRadius: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "15px 25px",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#0d5c9e",
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "12px 18px",
  },
}));

const ButtonContainer: React.FC<ButtonContainerProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default ButtonContainer;