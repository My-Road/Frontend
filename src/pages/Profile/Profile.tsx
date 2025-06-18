import { FC, useState } from "react";
import { Paper } from "@mui/material";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm";
import { useGetUserAPI } from "./hooks/useGetUserAPI";
import useUpdateUserAPI from "./hooks/useUpdateUserAPI";
import { UpdateUserPayload } from "./types";
import { validationSchema } from "./formSchema";
import Loader from "@/components/Loader";
import { Navigate } from "react-router-dom";
import PageContainer from "@/containers/PageContainer";

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

  if (error || !user) {
    return <Navigate to="/*" />;
  }

  const initialValues = {
    id: user.id,
    role: user.role,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  return (
    <PageContainer maxWidth="sm">
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
          <ProfileView user={user} onEdit={() => setIsEditing(true)} />
        )}
      </Paper>
    </PageContainer>
  );
};

export default Profile;
