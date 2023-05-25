import { CreateChannelInputType, CreateChannelType } from "@/types/Channel";

export const createChannelInputTypeToCreateChannelType = (
  input: CreateChannelInputType
): CreateChannelType => {
  if (input.members && input.type === "public") {
    input.members = ""
  }
  return {
    name: input.name!,
    type: input.type!,
    members: input.members
      ? input.members.split(",").filter(Boolean).map(Number)
      : [],
  };
};
