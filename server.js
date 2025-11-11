import express from "express";
import ConnectDb from "./Config/db.js";
import cors from "cors";

const app = express();
const port = 8000;

ConnectDb();
app.use(cors());
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
