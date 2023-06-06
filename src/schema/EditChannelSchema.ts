import * as yup from "yup";

const EditChannelSchema = yup.object({
  members: yup
  .array().of(yup.number()).min(1),
});

export default EditChannelSchema;
