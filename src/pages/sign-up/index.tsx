"use client";

import { Register } from "@/components/authentification/Register";
import { inputToCreateUser } from "@/mapper/UserMapper";
import { login } from "@/operations/login/login";
import { register } from "@/operations/register/register";
import { CreateUserInput } from "@/types/inputs/InputUser";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const route = useRouter();

  const submitHandler = async (createUserInput: CreateUserInput) => {
    register(inputToCreateUser(createUserInput))
      .then(async () => {
        await login(createUserInput.email!, createUserInput.password!)
          .then(() => {
            route.push("/profile");
          });
      });
  };

  return <Register submitHandler={submitHandler} />;
};

export default RegisterPage;
