import express, { urlencoded } from "express" ;
import dotenv, { config } from "dotenv";
import authRoute from "./Routes/auth-route.js"
import messageRoute from "./Routes/message-route.js"
import connectDB from "./Config/config.js";
import cookieParser from "cookie-parser"
import cors from "cors";
import { app , server } from "./Middlewares/socket.js";
dotenv.config();
const PORT = process.env.PORT ; 


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(cors({
    origin : true,
    credentials : true ,
}));


// User Route 
app.use("/api/auth", authRoute);

// Message Route 
app.use("/api/messages", messageRoute);


server.listen(PORT ,()=> {
    console.log("Server is running on PORT :" , PORT);
    connectDB();
});