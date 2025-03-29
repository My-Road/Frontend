import React from "react";
import { styled } from "@mui/material/styles";

const StyledIcon = styled("img")(({ theme }) => ({
  width: "48px",
  height: "48px",
  transition: "0.3s",
  [theme.breakpoints.down("sm")]: {
    width: "38px",
    height: "38px",
  },
}));

interface ButtonIconProps {
  src: string;
  alt?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ src, alt = "Button Icon" }) => {
  return <StyledIcon src={src} alt={alt} />;
};

export default ButtonIcon;