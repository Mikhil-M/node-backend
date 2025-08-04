import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: './.env' });

connectDB()
.then(() => {
    app.on('error', (err) => {
        console.error("Express app encountered an error:", err);
        throw err;
    });
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    })
})
.catch((error) => {
    console.error(" MongoDB Connection Failed:", error);
    process.exit(1);
});



























// One way to connect to MongoDB using Mongoose and Express - Not a recommented way as it is directly writeen in the index.js file
/*
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";

dotenv.config({ path: './.env' });

const app = express();

(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB successfully");
        app.on('error', (err) => {
            console.error("Express app encountered an error:", err);
            throw err;
        });
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });   
    } catch (error) {
        console.error("Error during initialization:", error);
        process.exit(1);
    }    
})()
*/