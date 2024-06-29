import express from "express";
import { cruxReportRoutes } from "./routes/cruxReportRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://crux-report-ui.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api", cruxReportRoutes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
