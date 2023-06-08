import {
  CreateChannelType,
} from "@/types/Channel";
import { CreateChannelInputType } from "@/types/inputs/InputChannel";

export const refreshMembersCreateChannel = (
  input: CreateChannelType
): CreateChannelType => {
  if ((input.type === "public") || (input.type === "private" && input.members === undefined)) {
    input.members = [];
  }
  return {
    name: input.name,
    type: input.type,
    members: input.members,
  };
};

export const inputToCreateChannel = (input: CreateChannelInputType): CreateChannelType => {
  return {
    name: input.channelName!,
    type: input.type!,
    members: input.members
  }
}