import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connection successful');
    } catch (error) {
        console.log("DB not connected:", error.message);
    }
}

export default connection;
