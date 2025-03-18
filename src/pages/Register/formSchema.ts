import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email('Email is required. Enter a valid address').required('Please enter a valid email'),
  firstName: yup.string().min(2, 'First name must be at least 2 characters').max(50, 'First name must be at most 20 characters').required('Please enter your first name'),
  lastName: yup.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be at most 20 characters').required('Please enter your last name'),
  phoneNumber: yup.string().matches(/^\+?\d{10,15}$/, 'Phone number must contain numbers only').required('Please enter a valid phone number'),
  role: yup.string().oneOf(['Super Admin', 'Admin', 'Manager'], 'Invalid role').required('Role is required'),
});
