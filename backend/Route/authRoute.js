const express = require("express");
const OpenAI = require("openai");
const AuthRouter = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

AuthRouter.post("/get", async (req, res) => {
  try {
    const { message, imageBase64, primaryColor, secondaryColor, fontFamily } = req.body;

    const chatMessages = [];
    const userContent = [];

    userContent.push({
      type: "text",
      text: `User Message: "${message}". Use settings: Primary Color: ${primaryColor}, Secondary Color: ${secondaryColor}, Font Family: ${fontFamily}. Return:
      - One main code.
      - Three variations with small changes (e.g., layout, alignment, color).`
    });

    if (imageBase64) {
      userContent.push({
        type: "image_url",
        image_url: { url: `data:image/jpeg;base64,${imageBase64}` },
      });
    }

    chatMessages.push({ role: "user", content: userContent });

    const modelToUse = imageBase64 ? "gpt-4o" : "gpt-3.5-turbo";

    const completion = await openai.chat.completions.create({
      model: modelToUse,
      messages: chatMessages,
    });

    const reply = completion.choices[0].message.content;

    const [mainCode, ...recommendations] = reply.split("---recommendation---");

    res.json({ mainCode: mainCode.trim(), recommendations: recommendations.map(r => r.trim()) });
  } catch (error) {
    console.error("Error in /get:", error);
    res.status(500).json({ error: "Something went wrong while generating response." });
  }
});

module.exports = AuthRouter;