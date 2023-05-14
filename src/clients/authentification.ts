import axios from "axios";

export const login = async (email: string, password: string) => {
  const res = await axios
    .post("http://localhost:8080/users/login", {
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
    .post("http://localhost:8080/users", user)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
