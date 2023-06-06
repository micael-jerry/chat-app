import {
  AddMembersToChannelInputType,
  AddMembersType,
  CreateChannelType,
} from "@/types/Channel";

export const createChannelMapper = (
  input: CreateChannelType
): CreateChannelType => {
  if (input.type === "public") {
    input.members = [];
  }
  return {
    name: input.name,
    type: input.type,
    members: input.members,
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
