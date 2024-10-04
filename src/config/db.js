import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

async function connectionDB() {
    try {
        console.log('The connection has initiated!');

        const mongoUrl = await mongoose.connect(process.env.MONGO_URL);

        console.log('Connection sucefully done!');
    } catch (error) {
        console.log(erro)
    }
}

export default connectionDB;