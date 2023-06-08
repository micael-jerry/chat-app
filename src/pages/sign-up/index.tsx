"use client";

import { Register } from "@/components/authentification/Register";
import { inputToCreateUser, inputToUserLogin } from "@/mapper/UserMapper";
import { login } from "@/operations/login/login";
import { register } from "@/operations/register/register";
import { UserLogin } from "@/types/User";
import { CreateUserInput } from "@/types/inputs/InputUser";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const route = useRouter();

  const submitHandler = async (createUserInput: CreateUserInput) => {
    register(inputToCreateUser(createUserInput))
      .then(async () => {
        const { email, password } = createUserInput;
        const userLogin: UserLogin = inputToUserLogin({ email, password })
        await login(userLogin)
          .then(async () => {
            await route.push("/profile");
          });
      }).catch(async (err) => {
        await route.push("/sign-up")
        console.log(err);
      })
  };

  return <Register submitHandler={submitHandler} />;
};

export default RegisterPage;
