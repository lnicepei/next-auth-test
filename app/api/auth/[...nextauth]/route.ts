import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      authorize: async (credentials) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${credentials}`
        );
        const user = await res.json();

        return user;
      },
      credentials: {
        username: {
          label: 'username',
          type: 'text',
          placeholder: 'Username',
        },
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
