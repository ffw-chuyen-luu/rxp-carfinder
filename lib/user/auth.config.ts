import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const paths = ["/login", "/signup"];
      const isOnUserPage = paths.includes(nextUrl.pathname);

      if (isOnUserPage && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }

      if (!isLoggedIn && nextUrl.pathname === "/profile") {
        return Response.redirect(new URL("/login", nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
