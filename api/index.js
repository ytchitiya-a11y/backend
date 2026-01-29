
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  const API_KEY = process.env.MY_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key missing" });
  }

  // 👉 YAHAN voice / TTS API call lagegi (OpenAI / ElevenLabs etc)

  res.status(200).json({
    success: true,
    message: "Voice generated (demo)",
    receivedText: text
  });
}
