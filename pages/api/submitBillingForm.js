import connectMongo from '@/database/conn';
import BillingFormModel from '@/model/BillingFormModel';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Connect to MongoDB
            await connectMongo();


            const formData = new BillingFormModel({
                accountNumber: req.body.accountNumber,
                billType: req.body.billType,
                serviceStartDate: req.body.serviceStartDate,
                serviceEndDate: req.body.serviceEndDate,
                billAmount: req.body.billAmount,
                usageAmount: req.body.usageAmount,
                engineeringUnit: req.body.engineeringUnit,
            });

            await formData.save();

            res.status(201).json({ message: 'Form submitted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
