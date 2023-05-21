import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { login } from "@/operations/login/login";
import { UserLogin } from "@/types/User";
import { Login } from "@/components/authentification/Login";

const LoginPage = () => {
  const [userLogin, setUserLogin] = useState<UserLogin>({ email: "", password: "" })
  const route = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserLogin((prev: any) => {
      return { ...prev, [id]: value }
    })
  }

  const submitHandler = async (e: any) => {
    e.preventDefault();
    login(userLogin.email, userLogin.password)
      .then((res) => {
        route.push("/global");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Login userLogin={userLogin} handleChange={handleChange} submitHandler={submitHandler} />
  );
};

export default LoginPage;
