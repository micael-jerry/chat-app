import { signIn, signOut } from "next-auth/react";
import { UserLogin } from '@/types/User';

export const login = async (userLogin: UserLogin) => {
  const signin = await signIn("credentials", {
    redirect: false,
    email: userLogin.email,
    password: userLogin.password,
  });
  return signin;
};

export const logout = async () => {
  await signOut({ redirect: false });
};
