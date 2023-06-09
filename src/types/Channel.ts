export type CreateChannelType = {
  name: string;
  type: string;
  members?: number[];
};

export type AddMembersToChannelType = {
  members: number[];
};

export type Channel = {
  id: number;
  name: string;
  ownerId: number;
  owner: ChannelOwner;
  type: "public" | "private";
  updatedAt: string;
};

export type ChannelOwner = {
  id: number;
  name: string;
  email: string;
};

export type GetChannelType = {
  status: boolean;
  channel: Channel;
};

export type GetChannelsType = {
  status: boolean;
  channels: Channel[];
};
