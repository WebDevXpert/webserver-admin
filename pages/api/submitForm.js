import connectMongo from '@/database/conn';
import OnboardFormModel from '@/model/OnboardFormModel';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectMongo();
            const formData = new OnboardFormModel(req.body);
            await formData.save();

            return res.status(201).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error submitting form:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
