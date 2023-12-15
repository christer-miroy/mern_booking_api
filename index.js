import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

const port = process.env.PORT || 8800;

// middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// error handling middleware
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong!";
    return res.status(errStatus).json({
        success:false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    });
})

app.listen(port, () => {
    connect();  
    console.log(`server started on ${port}...`);
});