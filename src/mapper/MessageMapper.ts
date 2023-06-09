import { CreateMessage } from "@/types/Message";
import { CreateMessageInput } from "@/types/inputs/InputMessage";

export const inputToCreateMessage = (
  input: CreateMessageInput
): CreateMessage => {
  return {
    channelId: input.channelId,
    recipientId: input.recipientId,
    content: input.message!,
  };
};
