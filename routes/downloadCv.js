import express from "express";
import { downloadCv} from "../controllers/downloadCv.js";

const router = express.Router();

router.get("/download-cv", downloadCv);

export default router;