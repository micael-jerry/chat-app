import * as yup from "yup";

const CreateUserSchema = yup
  .object({
    name: yup.string().max(50).required("Enter your name"),
    email: yup.string().email().required("Email required"),
    password: yup.string().required("Password Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    bio: yup.string().max(300),
  })
  .required();

export default CreateUserSchema;
