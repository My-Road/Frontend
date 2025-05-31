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


{

  /*import { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectIsLoggedIn,
  selectUser,
} from "@/features/User";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Grid,
  Chip,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Profile: FC = () => {
  const userEmail = useSelector(selectUserEmail);
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f7fa">
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 4,
          boxShadow: 6,
          p: 3,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar sx={{ width: 100, height: 100, mb: 1, bgcolor: "#1976d2" }}>
            <PersonIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography variant="h5" fontWeight="bold">
            {user.fullName || "اسم المستخدم"}
          </Typography>
          <Chip
            label={user.userRole || "غير محدد"}
            color="primary"
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Box>

        <Paper elevation={1} sx={{ p: 2, backgroundColor: "#fafafa", borderRadius: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                <strong>📧 البريد الإلكتروني:</strong> {userEmail || "غير متوفر"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                <strong>🆔 UID:</strong> {user.uid || "غير متوفر"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                <strong>🔐 حالة الدخول:</strong>{" "}
                {isLogged ? (
                  <Chip label="نشط" color="success" size="small" />
                ) : (
                  <Chip label="غير مسجل" color="default" size="small" />
                )}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Card>
    </Box>
  );
};

export default Profile;*/
}

{
  /*import { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectIsLoggedIn,
  selectUser,
  selectUserPhone,
} from "@/features/User";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Grid with size support
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { updateUser } from "@/features/User"; 
import { useAppDispatch } from "@/store";
const Profile: FC = () => {
  const userEmail = useSelector(selectUserEmail);
  const userPhone = useSelector(selectUserPhone);
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    userRole: user.userRole,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  const dispatch = useAppDispatch();

  const handleSave = () => {
    dispatch(updateUser({
        fullName: editedUser.fullName,
        email: editedUser.email,
        phone: editedUser.phone,
    }));

    setEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      userRole: user.userRole,
    });
    setEditing(false);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f0f2f5"
      px={2}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          p: { xs: 2, sm: 4 },
          borderRadius: 5,
          boxShadow: 6,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isMobile ? "column" : "row"}
          mb={4}
          gap={2}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ width: 70, height: 70, bgcolor: "#1976d2" }}>
              <PersonIcon sx={{ fontSize: 36 }} />
            </Avatar>
            <Box>
              {editing ? (
                <TextField
                  name="fullName"
                  value={editedUser.fullName}
                  onChange={handleChange}
                  label="الاسم الكامل"
                  fullWidth
                />
              ) : (
                <>
                  <Typography variant="h6" fontWeight={700}>
                    {user.fullName || "اسم المستخدم"}
                  </Typography>
                  <Typography color="text.secondary">
                    UID: {user.uid || "غير متوفر"}
                  </Typography>
                  {isLogged && (
                    <Chip
                      label="نشط"
                      color="success"
                      size="small"
                      sx={{ mt: 1, fontSize: 12 }}
                    />
                  )}
                </>
              )}
            </Box>
          </Box>

          {!editing ? (
            <IconButton onClick={() => setEditing(true)} color="primary">
              <EditIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={1}>
              <IconButton onClick={handleSave} color="success">
                <SaveIcon />
              </IconButton>
              <IconButton onClick={handleCancel} color="error">
                <CloseIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>            {editing ? (
              <TextField
                name="email"
                label="البريد الإلكتروني"
                value={editedUser.email}
                onChange={handleChange}
                fullWidth
              />
            ) : (
              <>
                <Typography variant="subtitle2" color="text.secondary">
                  البريد الإلكتروني
                </Typography>
                <Typography fontWeight={500}>
                  {userEmail || "غير متوفر"}
                </Typography>
              </>
            )}
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
    <Typography variant="subtitle2" color="text.secondary">
      الدور
    </Typography>
    <Typography fontWeight={500}>
      {user.userRole || "غير محدد"}
    </Typography>
  </Grid>


          <Grid size={{ xs: 12, sm: 6 }}>            {editing ? (
              <TextField
                name="phone"
                label="رقم الهاتف"
                value={editedUser.phone}
                onChange={handleChange}
                fullWidth
              />
            ) : (
              <>
                <Typography variant="subtitle2" color="text.secondary">
                  رقم الهاتف
                </Typography>
                <Typography fontWeight={500}>
                  {userPhone || "غير متوفر"}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Profile;*/
}
