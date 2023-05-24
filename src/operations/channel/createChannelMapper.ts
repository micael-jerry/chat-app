import { CreateChannelInputType, CreateChannelType } from "@/types/Channel";

export const createChannelInputTypeToCreateChannelType = (
  input: CreateChannelInputType
): CreateChannelType => {
  return {
    name: input.name!,
    type: input.type!,
    members: input.members
      ? input.members.split(",").filter(Boolean).map(Number)
      : [],
  };
};
