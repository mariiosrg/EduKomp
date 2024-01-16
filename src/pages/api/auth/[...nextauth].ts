import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../server/db/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { signupSchema } from "@/lib/db";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const creds = await signupSchema.parseAsync(credentials);
        const username1 = creds.username;
        const password1 = creds.password;
        const user = await db.user.findUnique({
          where: { username: username1 },
        }); // Updated property name

        if (!user) {
          const obj = { username: username1, password: password1 };
          const newUser = await db.user.create({ data: obj });
          return {
            id: newUser?.id,
            username: newUser?.username,
          };
        }
        if (user.password !== password1) {
          return null;
        }
        // User is authenticated
        return {
          id: user.id,
          username: user.username,
          email: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.email,
        };
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

export default NextAuth(authOptions);
