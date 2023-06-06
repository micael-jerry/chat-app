import * as yup from "yup";

const CreateChannelSchema = yup.object({
  name: yup.string().max(20).required(),
  type: yup
    .string()
    .oneOf(["private", "public"])
    .required("Type must be public or private"),
  members: yup.array().of(yup.number()),
});

export default CreateChannelSchema;
