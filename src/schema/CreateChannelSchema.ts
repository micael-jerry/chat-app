import * as yup from "yup";

const CreateChannelSchema = yup.object({
  name: yup.string().max(20).required(),
  type: yup
    .string()
    .oneOf(["private", "public"])
    .required("Type must be public or private"),
  members: yup
    .string()
    .matches(/^[\d,]*$/, "Must contain the member ids separated by a comma"),
});

export default CreateChannelSchema;
