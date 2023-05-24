import { useRouter } from "next/router";
import { login } from "@/operations/login/login";
import { UserLogin } from "@/types/User";
import { Login } from "@/components/authentification/Login";

const LoginPage = () => {
  const route = useRouter();

  const submitHandler = async (userLogin: UserLogin) => {
    login(userLogin.email!, userLogin.password!)
      .then((res) => {
        route.push("/channel");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Login submitHandler={submitHandler} />;
};

export default LoginPage;
