import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect_database } from "@/database/connection";
import { userLoginSchema } from "@/lib/zodschema";
import { User } from "@/database/models/models";
import bcrypt from "bcryptjs";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text", placeholder: "example@gmail.com" },
        password: { type: "password", placeholder: "********" },
      },
      async authorize(credentials) {
        const { email, password } = userLoginSchema.parse(credentials);
        await connect_database();
        const user = await User.findOne({ email });
        console.log(user);

        if (!user) return null;

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        console.log("pm: ", isPasswordMatched);
        if (!isPasswordMatched) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      await connect_database();
      const user = await User.findOne({ email: session.user.email });
      user.password = "";
      session.user = user;
      session.user._id = token.id;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        console.log(account);
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET_KEY,
};

export default NextAuth(authOptions);
