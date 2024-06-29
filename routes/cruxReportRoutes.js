import express from "express";
import { getCruxReport } from "../controller/cruxReportController.js";

const router = express.Router();

router.post("/crux-report", getCruxReport);

export { router as cruxReportRoutes };
