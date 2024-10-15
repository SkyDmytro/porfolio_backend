import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import emailRouter from "./routes/sendEmail.js";
import downloadCvRouter from "./routes/downloadCv.js";

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT || "3001", 10);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [emailRouter, downloadCvRouter]);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

