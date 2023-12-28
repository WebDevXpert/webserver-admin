import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { compare } from 'bcryptjs';

const connectDB = async () => {
    try {
        await connectMongo();
    } catch (error) {
        console.error('Connection Failed...!', error);
        throw error;
    }
};

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
                await connectDB();

                try {
                    // Check user existence
                    const result = await Users.findOne({ email: credentials.email });
                    if (!result) {
                        throw new Error("No user found with this email. Please sign up.");
                    }
                    // Compare passwords
                    const checkPassword = await compare(credentials.password, result.password);

                    if (!checkPassword || result.email !== credentials.email) {
                        throw new Error("Invalid email or password.");
                    }

                    return result;
                } catch (error) {
                    console.error('Error during credentials authorization:', error);
                    throw error;
                }
            },
        }),
    ],

    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    },
});