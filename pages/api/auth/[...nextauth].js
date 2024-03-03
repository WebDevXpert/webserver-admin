import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'
import { compare } from 'bcryptjs';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                connectMongo().catch(error => { error: "Connection Failed...!" })

                const result = await Users.findOne({ email: credentials.email })
                if (!result) {
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                const checkPassword = await compare(credentials.password, result.password);
                if (!checkPassword) {
                    throw new Error("Invalid credentials")
                }

                return result;

            }
        })
    ],
    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    },
});