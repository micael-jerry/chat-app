import axios from "axios";
import { config } from "./config";

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
