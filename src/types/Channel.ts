export type CreateChannelType = {
  name: string;
  type: "public" | "private";
  members: number[];
};

export type CreateChannelInputType = {
  name: string;
  type: "public" | "private";
  members: string;
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

export type GetChannelsType = {
  status: boolean;
  channels: Channel[];
};
