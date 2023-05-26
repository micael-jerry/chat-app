import {
  AddMembersToChannelInputType,
  AddMembersType,
  CreateChannelInputType,
  CreateChannelType,
} from "@/types/Channel";

export const createChannelInputTypeToCreateChannelType = (
  input: CreateChannelInputType
): CreateChannelType => {
  if (input.members && input.type === "public") {
    input.members = "";
  }
  return {
    name: input.name!,
    type: input.type!,
    members: membersChannelConvert(input.members),
  };
};

export const addMembersToChannelInputTypeToMembersType = (
  inputMembers: AddMembersToChannelInputType
): AddMembersType => {
  return {
    members: membersChannelConvert(inputMembers.members),
  };
};

export const membersChannelConvert = (
  membersString: string | undefined | null
): number[] => {
  return membersString
    ? membersString.split(",").filter(Boolean).map(Number)
    : [];
};
