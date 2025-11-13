import express, { json } from "express";
import ConnectDb from "./Config/db.js";
import cors from "cors";
import authRouter from "./Routes/AuthRouter.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 8000;

ConnectDb();
app.use(cookieParser());
app.use(json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api", authRouter);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
