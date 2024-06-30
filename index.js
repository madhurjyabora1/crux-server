import express from "express";
import { cruxReportRoutes } from "./routes/cruxReportRoutes.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use(cors())
app.use("/api", cruxReportRoutes);
app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
