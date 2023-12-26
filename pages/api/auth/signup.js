import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    try {
        await connectMongo();

        if (req.method === 'POST') {
            if (!req.body) {
                console.error("Request body is empty");
                return res.status(404).json({ error: "Don't have form data...!" });
            }

            const { username, email, password } = req.body;

            const checkExisting = await Users.findOne({ email });
            if (checkExisting) {
                console.error("User already exists");
                return res.status(422).json({ message: "User Already Exists...!" });
            }

            const hashedPassword = await hash(password, 12);

            const data = await Users.create({ username, email, password: hashedPassword });

            console.log("User created successfully:", data);
            res.status(201).json({ status: true, user: data });
        } else {
            console.error("Invalid HTTP method:", req.method);
            res.status(500).json({ message: "HTTP method not valid, only POST accepted" });
        }
    } catch (error) {
        console.error('Error in signup.js:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
