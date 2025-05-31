import { FC } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { User } from "../types";
import { Roles } from "@/enums/Roles";
import UserAvatar from "@/components/UserAvatar";

interface ProfileViewProps {
  user: User;
  onEdit: () => void;
}

const ProfileView: FC<ProfileViewProps> = ({ user, onEdit }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
        <UserAvatar
          fullName={`${user.firstName} ${user.lastName}`}
          sx={{ width: 80, height: 80, fontSize: 28, mb: 1 }}
        />
        <Typography variant="h5" fontWeight="bold">
          {`${user.firstName} ${user.lastName}`}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box mb={1}>
        <Typography variant="body1">
          <Typography component="span" fontWeight="bold">
            {t("Tables.Headers.userId")}:
          </Typography>{" "}
          {user.id}
        </Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="body1">
          <Typography component="span" fontWeight="bold">
            {t("Tables.Headers.Role")}:
          </Typography>{" "}
          {Roles[user.role]}
        </Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="body1">
          <Typography component="span" fontWeight="bold">
            {t("Tables.Headers.Email")}:
          </Typography>{" "}
          {user.email}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="body1">
          <Typography component="span" fontWeight="bold">
            {t("Tables.Headers.Phone")}:
          </Typography>{" "}
          {user.phoneNumber}
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

