import * as yup from "yup";

const EditChannelSchema = yup.object({
  members: yup
    .string()
    .min(1)
    .matches(/^[\d,]*$/, "Must contain the member ids separated by a comma")
    .required("Add new members"),
});

export default EditChannelSchema;
