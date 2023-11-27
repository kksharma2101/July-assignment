import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connect from "../config/db.js";
import userRoute from "../router/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", userRoute);

// connect db
connect();

export default app;
