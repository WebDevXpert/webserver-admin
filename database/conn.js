import { connect } from 'mongoose';

const connectMongo = async () => {
    try {
        const { connection } = await connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

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

export default connectMongo;
