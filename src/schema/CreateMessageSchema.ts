import * as yup from "yup";

const CreateMessageSchema = yup.object({
  channelId: yup.number(),
  recipientId: yup.number(),
  content: yup.string().required("Write message").min(1),
});

export default CreateMessageSchema;
