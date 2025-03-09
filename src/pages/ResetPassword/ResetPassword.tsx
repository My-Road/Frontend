import { Form, FormikProvider, useFormik } from "formik";
import { Button, Paper, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import { useNavigate } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import { ConfirmPasswordPayLoad } from "./types.ts";
import PasswordField from "@/components/Fields/PasswordField/PasswordField.tsx";
import { validationSchema } from "./formSchema.ts";


const ForgetPassword: React.FC = () => {
  // const navigate = useNavigate();
  const onSubmit = (values: ConfirmPasswordPayLoad) => {
    //for now 
    console.log("Form Data:", values);
  }

  const formik = useFormik({
    initialValues: { 
      password: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit
  });

  return (
    <FormikProvider value={formik}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid size={{ xs: 10, sm: 8, md: 4 }}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box
              sx={{
                clipPath: "inset(10px 10px 10px 10px);",
                textAlign: "center",
              }}
            >
              <img src={Logo} alt="" width="150px" height="150px" />
            </Box>
            <Typography variant="h5" gutterBottom align="center">
              Reset Password
            </Typography>
            <Form onSubmit={formik.handleSubmit}>
            <PasswordField name="password" aria-label="Enter your password" />
            <PasswordField name="confirmPassword" aria-label="Enter your password" />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Reset Password
              </Button>
            </Form>
          </Paper>
        </Grid>
      </Grid>
    </FormikProvider>
  );
};

export default ForgetPassword;
