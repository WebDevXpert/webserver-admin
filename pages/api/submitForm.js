import connectMongo from '@/database/conn';
import OnboardFormModel from '@/model/OnboardFormModel';

export default async function handler(request, response) {
    if (request.method === 'POST') {
        try {
            await connectMongo();

            const buNumberRegex = /^BU\d{4}[A-Z]*$/;
            if (!buNumberRegex.test(request.body.buNumber.toUpperCase())) {
                return response.status(400).json({ error: 'Invalid BU Number format' });
            }


            const accountNumberRegex = /^[A-Za-z0-9\-]{11,30}$/;
            if (!accountNumberRegex.test(request.body.accountNumber)) {
                return response.status(400).json({ error: 'Account Number should contain between 11 and 30 characters including alphabets, digits, and hyphens' });
            }


            const formData = new OnboardFormModel({
                buNumber: request.body.buNumber.toUpperCase(),
                billType: request.body.billType,
                accountNumber: request.body.accountNumber,
                grid: request.body.grid,
            });
            await formData.save();


            const { buNumbersCount, buNumbers } = await fetchUpdatedBUData();

            response.status(200).json({ buNumbersCount, buNumbers });
        } catch (error) {
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
        return { buNumbersCount, buNumbers };
    } catch (error) {
        throw error;
    }
}