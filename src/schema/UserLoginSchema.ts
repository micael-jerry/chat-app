import * as yup from "yup";

const UserLoginSchema = yup.object({
  email: yup.string().email("Invalid Input").required("Email required"),
  password: yup.string().required("Password Required"),
});

export default UserLoginSchema;
