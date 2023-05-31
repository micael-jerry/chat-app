export type Message = {
  id: number;
  channelId: number;
  senderId: number;
  sender: SenderMessage;
  content: string;
  recipientId: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessage = {
  channelId?: number | null;
  recipientId?: number | null;
  content?: string;
};

export type SenderMessage = {
  id: number;
  name: string;
  email: string;
};

export type GetChannelMessagesType = {
  status: boolean;
  channelId: number;
  messages: Message[];
};

export type GetPrivateMessageType = {
  status: boolean;
  userId: number;
  messages: Message[];
};
