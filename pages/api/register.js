import { connectMongo } from '../../../database/conn';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    try {
        await connectMongo();

        if (req.method === 'POST') {
            const { username, email, password } = req.body;

            const existingUser = await Users.findOne({ email });

            if (existingUser) {
                return res.status(422).json({ message: 'User already exists.' });
            }

            const hashedPassword = await hash(password, 12);

            const newUser = new Users({
                username,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            return res.status(201).json({ status: true, user: newUser });
        }

        res.status(500).json({ message: 'Invalid HTTP method. Only POST is accepted.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
