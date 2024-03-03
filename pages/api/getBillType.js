import connectMongo from '@/database/conn';
import OnboardFormModel from '@/model/OnboardFormModel';

export default async function handler(request, response) {
    try {
        await connectMongo();

        if (request.method === 'GET') {
            const billingTypes = await fetchBillingTypes();
            response.status(200).json(billingTypes);
        } else {
            response.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
}

async function fetchBillingTypes() {
    try {
        const distinctBillingTypes = await OnboardFormModel.distinct('billType');
        return distinctBillingTypes;
    } catch (error) {
        throw error;
    }
}
