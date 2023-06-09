import { useRouter } from "next/router";
import { login } from "@/operations/login/login";
import { Login } from "@/components/authentification/Login";
import { UserLoginInput } from "@/types/inputs/InputUser";
import { inputToUserLogin } from "@/mapper/UserMapper";

const LoginPage = () => {
  const route = useRouter();

  const submitHandler = async (userLoginInput: UserLoginInput) => {
    login(inputToUserLogin(userLoginInput))
      .then(async () => {
        await route.push("/profile");
      })
      .catch(async (err) => {
        await route.push("/login");
        console.log(err);
      });
  };

  return <Login submitHandler={submitHandler} />;
};

export default LoginPage;
