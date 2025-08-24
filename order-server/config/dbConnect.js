import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path:'././src/.env' })

const dbConnect = async() => {
    try {    
        console.log(process.env.CONNECTION_STRING)
        const mongoDBConnection = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected successfully");
    }
    catch(error) {
        console.log("Error in connecting to database");
        console.log(error);
        process.exit(1);
    }
};

export default dbConnect;
