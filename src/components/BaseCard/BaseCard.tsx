import React from "react";
import { Grow, Box } from "@mui/material";

interface BaseCardProps {
  timeout?: number;
  children: React.ReactNode;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, timeout = 600 }) => {
  return (
    <Grow in={true} timeout={timeout}>
      <Box>
        {children}
      </Box>
    </Grow>
  );
};

export default BaseCard;
