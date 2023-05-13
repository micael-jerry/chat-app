import { register as authRegister } from "@/clients/authentification";
import { login } from "@/operations/login/login";

export const register = async (userRegister: object) => {
    authRegister(userRegister)
        .then(res => {
            return login(userRegister.email, userRegister.password)
        })
        .catch(err => {
            return err;
        })
}