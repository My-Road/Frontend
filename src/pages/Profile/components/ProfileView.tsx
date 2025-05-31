import { FC } from "react";
import { Box, Typography, Avatar, Divider, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";
import { User } from "../types";
import { Roles } from "@/enums/Roles"; 

interface ProfileViewProps {
  user: User;
  onEdit: () => void;
}

const ProfileView: FC<ProfileViewProps> = ({ user, onEdit }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
        <Avatar sx={{ width: 80, height: 80, mb: 1 }}>
          <PersonIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" fontWeight="bold">
          {`${user.firstName} ${user.lastName}`}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box mb={1}>
        <Typography variant="body1">
          <strong>{t("Tables.Headers.userId")}:</strong> {user.id}
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="body1">
          <strong>{t("Tables.Headers.Role")}:</strong> {Roles[user.role]}
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="body1">
          <strong>{t("Tables.Headers.Email")}:</strong> {user.email}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          <strong>{t("Tables.Headers.Phone")}:</strong> {user.phoneNumber}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={onEdit}>
          {t("Buttons.edit")}
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileView;

