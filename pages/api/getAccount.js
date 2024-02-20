// api/getAccount.js

import connectMongo from '@/database/conn';
import OnboardFormModel from '@/model/OnboardFormModel';

export default async function handler(request, response) {
    try {
        await connectMongo();

        if (request.method === 'GET') {
            const accountNumbers = await fetchAccountNumbers();
            response.status(200).json(accountNumbers);
        } else {
            response.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}

async function fetchAccountNumbers() {
    try {
        const accountNumbers = await OnboardFormModel.find({}, 'accountNumber');
        console.log('Fetched Account Numbers:', accountNumbers);
        return accountNumbers;
    } catch (error) {
        console.error('Error fetching Account numbers:', error);
        throw error;
    }
}
