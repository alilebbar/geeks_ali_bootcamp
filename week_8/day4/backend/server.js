import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import router from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    cokies: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

db();

app.use("/api/users", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
