import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmailToLocalStorage  } from "@/storage/localStorage";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        console.log(email, password);
        
        const user = await getUserByEmailToLocalStorage(email);
        if (!user) {
          throw new Error("Invalid Email or Password");
        }
        const isPasswordMatched = (password === user.password)
        if (!isPasswordMatched) {
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
