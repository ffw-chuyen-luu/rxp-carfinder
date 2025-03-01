import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { authConfig } from "./auth.config";
import { getUserByEmail } from './data';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await getUserByEmail(String(email));
        if (
          !user ||
          !(await bcrypt.compare(String(password), user.password!))
        ) {
          return null;
        }

        return {
          ...user,
          password: "******",
        };
      },
    }),
  ],
});
