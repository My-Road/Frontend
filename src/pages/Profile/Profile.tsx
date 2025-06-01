import  { FC, useState } from "react";
import { Container, Paper,Typography } from "@mui/material";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm";
import { useGetUserAPI } from "./hooks/useGetUserAPI";
import useUpdateUserAPI from "./hooks/useUpdateUserAPI";
import { UpdateUserPayload } from "./types";
import { validationSchema } from "./formSchema";
import { useTranslation } from "react-i18next";

const Profile: FC = () => {
  const { t } = useTranslation();
  const { data: user, isLoading, error } = useGetUserAPI();
  const { updateUser, isPending } = useUpdateUserAPI();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (values: UpdateUserPayload) => {
    updateUser(values);
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <Container maxWidth="sm">
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" align="center">
            {t("profile.loading", "Loading...")}
          </Typography>
        </Paper>
      </Container>
    );
  }

  if (error || !user) {
    return (
      <Container maxWidth="sm">
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" align="center" color="error">
            {t("profile.error", "Error loading profile")}
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 3, mt: 4 }}>
        {isEditing ? (
          <ProfileForm
            initialValues={{
              id: user.id,
              role: user.role,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phoneNumber: user.phoneNumber,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSave}
            isSubmitting={isPending}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ProfileView user={user} onEdit={() => setIsEditing(true)} />
        )}
      </Paper>
    </Container>
  );
};

export default Profile;