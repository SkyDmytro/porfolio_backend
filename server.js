import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import emailRouter from "./routes/sendEmail.js";
dotenv.config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use("/api",emailRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
