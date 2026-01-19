
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("AI Backend running");
});

app.post("/api/generate", async (req, res) => {
  const { hotelName } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: `Write about ${hotelName}` }],
  });

  res.json({ result: response.choices[0].message.content });
});

export default app;
