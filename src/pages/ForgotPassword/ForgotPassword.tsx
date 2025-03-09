import { Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { Button, Paper, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import TextField from "@/components/Fields/TextField";
import Logo from "@/assets/images/logo.png";
import { ResetPasswordPayLoad } from "./types";

// Validation Schema
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
});

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: ResetPasswordPayLoad) => {
    //for now 
    console.log("Form Data:", values);
    navigate(`/reset-password`);
  }

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
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
              <TextField name="email" aria-label="enter a valid email" />
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
