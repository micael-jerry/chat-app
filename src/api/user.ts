import axios from "axios";
import BASE_URL from "./BASE_URL";
import { config } from "./config";

export const getUsers = async (token: string) => {
  const request = await axios
    .get(`${BASE_URL}/users`, config(token))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return request;
};

export const putUser = async (token: string, user: object) => {
  const res = await axios
    .put(`${BASE_URL}/user`, user, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
}