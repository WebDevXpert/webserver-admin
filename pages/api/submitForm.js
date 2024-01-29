import connectMongo from '@/database/conn';
import OnboardFormModel from '@/model/OnboardFormModel';

export default async function handler(request, response) {
    if (request.method === 'POST') {
        try {
            await connectMongo();

            // Save form data
            const formData = new OnboardFormModel(request.body);
            await formData.save();

            // Fetch updated BU numbers
            const { buNumbersCount, buNumbers } = await fetchUpdatedBUData();

            response.status(200).json({ buNumbersCount, buNumbers });
        } catch (error) {
            console.error('Error processing form submission:', error);
            if (error.code === 11000) {
                response.status(400).json({ error: 'Duplicate BU Number' });
            } else {
                response.status(500).json({ error: 'Internal Server Error' });
            }
        }
    } else {
        response.status(405).json({ message: 'Method Not Allowed' });
    }
}

async function fetchUpdatedBUData() {
    try {
        const buNumbers = await OnboardFormModel.find({}, 'buNumber name');
        const buNumbersCount = buNumbers.length;
        console.log('Fetched BU Numbers:', buNumbers);
        return { buNumbersCount, buNumbers };
    } catch (error) {
        console.error('Error fetching BU numbers:', error);
        throw error;
    }
}
