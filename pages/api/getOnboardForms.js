import connectMongo from '@/database/conn';
import OnboardFormModel from '@/model/OnboardFormModel';

export default async function handler(req, res) {
    await connectMongo();

    if (req.method === 'GET') {
        try {
            const onboardForms = await OnboardFormModel.find({});
            res.status(200).json({ onboardForms });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'POST') {
        const { buNumber, billType, accountNumber } = req.body;

        try {
            const buNumberRegex = /^BU\d{4}[A-Z]*$/;
            if (!buNumberRegex.test(buNumber)) {
                throw new Error('Invalid BU Number format');
            }

            const accountNumberRegex = /^[A-Za-z0-9\-]{11,30}$/;
            if (!accountNumberRegex.test(accountNumber)) {
                throw new Error('Account Number must be min 11 digits long');
            }

            const newOnboardForm = new OnboardFormModel({
                buNumber,
                billType,
                accountNumber,
            });

            await newOnboardForm.save();

            res.status(201).json({ message: 'Form submitted successfully' });
        } catch (error) {

            res.status(400).json({ error: 'Bad Request' });
        }
    } else {

        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
