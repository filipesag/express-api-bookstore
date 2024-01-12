import mongoose from "mongoose";


async function DBconnect() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default DBconnect;



