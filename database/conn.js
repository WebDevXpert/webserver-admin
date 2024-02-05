import fetch from 'node-fetch';

const connectLambda = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);

        if (response.ok) {
            console.log('Connected to AWS Lambda');
            return true;
        } else {
            throw new Error('Failed to connect to AWS Lambda');
        }
    } catch (error) {
        console.error('Error connecting to AWS Lambda:', error);
        throw error;
    }
};

export default connectLambda;

// import mongoose from 'mongoose';

// const connectMongo = async () => {
// await mongoose.connect(process.env.MONGO_URL);

// if (mongoose.connection.readyState === 1) {
//     console.log('Connected to MongoDB');
// return true
//         } else {
//             throw new Error('MongoDB connection failed');
//         }
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error;
//     }
// export default connectMongo;