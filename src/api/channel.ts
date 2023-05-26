import axios from "axios";
import { config } from "./config";
import { AddMembersType, CreateChannelType } from "@/types/Channel";

export const getChannels = async (token: string) => {
  const request = await axios
    .get("http://localhost:8080/channels", config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return request;
};

export const getChannelById = async (token: string, channelId: number) => {
  const request = await axios
    .get(`http://localhost:8080/channel/${channelId}`, config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return request;
};

export const createChannel = async (
  token: string,
  channel: CreateChannelType
) => {
  const res = await axios
    .post("http://localhost:8080/channel", channel, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};

export const addMembers = async (
  token: string,
  channelId: number,
  members: AddMembersType
) => {
  const res = await axios
    .post(
      `http://localhost:8080/channels/${channelId}/members`,
      members,
      config(token)
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};
