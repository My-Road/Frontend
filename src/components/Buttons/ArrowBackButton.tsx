import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowBackButtonProps } from "./types";

const ArrowBackButton = ({path}: ArrowBackButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Tooltip title={t("Buttons.back")}>
      <IconButton onClick={() => navigate(path)}>
        <ArrowBackIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ArrowBackButton;
