const express = require("express");
const OpenAI = require("openai");
const AuthRouter = express.Router();
const dotenv = require('dotenv');
dotenv.config();

AuthRouter.post("/get", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY
  });

  const { message, imageBase64, primaryColor, secondaryColor, fontFamily } = req.body;

  console.log("Received Data:");
  console.log("Message:", message);
  console.log("Primary Color:", primaryColor);
  console.log("Secondary Color:", secondaryColor);
  console.log("Font Family:", fontFamily);
  console.log("Image Provided:", imageBase64 ? "Yes" : "No");

  const messages = [
    {
      role: "user",
      content: [
        { type: "text", text: `User Message: "${message}", Use the following settings: Primary Color: ${primaryColor} - Secondary Color: ${secondaryColor} - Font Family: ${fontFamily}` },
      ],
    },
  ];

  if (imageBase64) {
    messages[0].content.push({
      type: "image_url",
      image_url: {
        url: `data:image/jpeg;base64,${imageBase64}`,
      },
    });
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  const reply = completion.choices[0].message.content;
  res.json({
    message: reply,
  });
});

module.exports = AuthRouter;
