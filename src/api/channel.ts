import axios from "axios";
import { config } from "./config";
import { AddMembersType, CreateChannelType } from "@/types/Channel";
import BASE_URL from "./BASE_URL";

export const getChannels = async (token: string) => {
  const request = await axios
    .get(`${BASE_URL}/channels`, config(token))
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
    .get(`${BASE_URL}/channel/${channelId}`, config(token))
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
    .post(`${BASE_URL}/channel`, channel, config(token))
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
      `${BASE_URL}/channels/${channelId}/members`,
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
