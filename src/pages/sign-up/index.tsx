"use client";

import { Register } from "@/components/authentification/Register";
import { login } from "@/operations/login/login";
import { register } from "@/operations/register/register";
import { CreateUser } from "@/types/User";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const route = useRouter();

  const submitHandler = async (createUser: CreateUser) => {
    register(createUser).then( async (res) => {
      await login(createUser.email!, createUser.password!).then((res) => {
        route.push("/profile");
      });
    });
  };

  return <Register submitHandler={submitHandler} />;
};

export default RegisterPage;
