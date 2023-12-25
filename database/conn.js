import { connect, connection } from 'mongoose';

const connectMongo = async () => {
    try {
        await connect(process.env.MONGO_URL);

        if (connection.readyState === 1) {
            console.log('Connected to MongoDB');
            return true;
        } else {
            throw new Error('MongoDB connection failed');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

export { connectMongo };
