import { FC, useState } from "react";
import { Container, Paper } from "@mui/material";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm";
import { useGetUserAPI } from "./hooks/useGetUserAPI";
import useUpdateUserAPI from "./hooks/useUpdateUserAPI";
import { UpdateUserPayload } from "./types";
import { validationSchema } from "./formSchema";
import Loader from "@/components/Loader";
import { Navigate } from "react-router-dom";

const Profile: FC = () => {
  const { data: user, isLoading, error } = useGetUserAPI();
  const { updateUser, isPending } = useUpdateUserAPI();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (values: UpdateUserPayload) => {
    updateUser(values);
    setIsEditing(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }
  
  const userData = user!;
  const initialValues = {
    id: userData.id,
    role: userData.role,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 3, mt: 4 }}>
        {isEditing ? (
          <ProfileForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSave}
            isSubmitting={isPending}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ProfileView user={userData} onEdit={() => setIsEditing(true)} />
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
