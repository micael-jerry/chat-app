import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { logToBackEnd } from "@/clients/login";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = logToBackEnd(email,password)
        if (!user) {
          throw new Error("Invalid Email or Password");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  }
});
