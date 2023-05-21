import axios from "axios";
import { config } from "./config";

export const getChannels = async (token: string) => {
  const request = await axios
    .get("http://localhost:8080/channels", config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return request;
};

export const createChannel = async (token: string, channel: object) => {
  const res = await axios
    .post("http://localhost:8080/channel", channel, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
