import axios from "axios";
import { config } from "./config";
import { CreateMessage } from "@/types/Message";
import BASE_URL from "./BASE_URL";

export const getMessagesByChannelId = async (
  token: string,
  channelId: number
) => {
  const request = await axios
    .get(`${BASE_URL}/messages/channel/${channelId}`, config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return request;
};

export const sendMessage = async (token: string, message: CreateMessage) => {
  const res = await axios
    .post(`${BASE_URL}/message`, message, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};

export const getMessageByUser = async (token: string, userId: number) => {
  const res = await axios
    .get(`${BASE_URL}/messages/${userId}`, config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};
