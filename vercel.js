import express from "express";
import cors from "cors";
import aiRoute from "./routes/ai.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
