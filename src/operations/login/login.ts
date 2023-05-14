import { signIn } from "next-auth/react";

export const login = async (email: string, password: string) => {
  const signin = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });
  return signin;
};
