import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import emailRouter from "./routes/sendEmail.js";

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT || "3001", 10);

app.use(cors());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://skydmytro.vercel.app/",
//     ],
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [emailRouter ]);

app.get("/api/hello", (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

