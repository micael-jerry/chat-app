"use client";

import { Register } from "@/components/authentification/Register";
import { register } from "@/operations/register/register";
import { CreateUser } from "@/types/User";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const RegisterPage = () => {
  const [createUser, setCreateUser] = useState<CreateUser>({
    name: "",
    email: "",
    password: "",
    bio: null,
  });
  const route = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCreateUser((prev: any) => {
      return { ...prev, [id]: value };
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    register(createUser).then((res) => {
      route.push("/login");
    });
  };

  return (
    <Register
      createUser={createUser}
      handleChange={handleChange}
      submitHandler={submitHandler}
    />
  );
};

export default RegisterPage;
