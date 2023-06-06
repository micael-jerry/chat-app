import axios from "axios";
import BASE_URL from "./BASE_URL";

export const login = async (email: string, password: string) => {
  const res = await axios
    .post(`${BASE_URL}/users/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res;
};

export const register = async (user: object) => {
  const res = await axios
    .post(`${BASE_URL}/users`, user)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return res;
};
