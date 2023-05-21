import { register as authRegister } from "@/clients/authentification";
import { CreateUser } from "@/types/User";

export const register = async (createUser: CreateUser) => {
  authRegister(createUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
