import axios from "axios";
import { config } from "./config";
import { CreateMessage } from "@/types/Message";

export const getMessagesByChannelId = async (
  token: string,
  channelId: number
) => {
  const request = await axios
    .get(`http://localhost:8080/messages/channel/${channelId}`, config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return request;
};

export const sendMessage = async (
  token: string,
  message: CreateMessage
) => {
  const res = await axios
    .post("http://localhost:8080/message", message, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};