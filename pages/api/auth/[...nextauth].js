import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectMongo } from '../../../database/conn';
import Users from '../../../model/Schema';
import { compare } from 'bcryptjs';

connectMongo().catch(error => {
    console.error('Connection Failed...!');
    throw error;
});

export default NextAuth({
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                // Check user existence
                const result = await Users.findOne({ email: credentials.email });

                if (!result) {
                    throw new Error("No user found with this email. Please sign up.");
                }

                // Compare passwords
                const checkPassword = await compare(credentials.password, result.password);

                if (!checkPassword || result.email !== credentials.email) {
                    throw new Error("Username or password doesn't match");
                }

                return Promise.resolve(result);
            },
        }),
    ],
    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        session: '/auth/session',
    },
    callbacks: {
        async session({ session, token, user }) {
            // Calculate the time remaining until the session expires
            const expiresIn = new Date(session.expires).getTime() - new Date().getTime();

            // If the session is about to expire, refresh the token
            if (expiresIn < 60 * 1000) {
                return Promise.resolve({ ...session, expires: token.expires });
            }

            return Promise.resolve(session);
        },
    },
})