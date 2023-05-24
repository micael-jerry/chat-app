"use client";

import { Register } from "@/components/authentification/Register";
import { register } from "@/operations/register/register";
import { CreateUser } from "@/types/User";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const route = useRouter();

  const submitHandler = async (createUser: CreateUser) => {
    register(createUser).then((res) => {
      route.push("/login");
    });
  };

  return <Register submitHandler={submitHandler} />;
};

export default RegisterPage;
