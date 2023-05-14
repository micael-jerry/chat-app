import { register as authRegister } from "@/clients/authentification";
import { login } from "@/operations/login/login";
import { CreateUser } from "@/types/CreateUser";

export const register = async (userRegister: CreateUser) => {
  authRegister(userRegister)
    .then((res) => {
      return login(userRegister.email, userRegister.password);
    })
    .catch((err) => {
      return err;
    });
};
