export type CreateChannelInputType = {
  channelName?: string;
  type?: string;
  members?: number[];
};

export type AddMembersToChannelInputType = {
  members?: number[];
};
