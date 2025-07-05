const express = require("express");
const OpenAI = require("openai");
const AuthRouter = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

const SYSTEM_PROMPT = `
You are an expert web development assistant skilled in generating full-stack and front-end code based on user requests and optional wireframe sketches.

Your task is to:
1. Generate a complete, production-ready main implementation that fully satisfies the user's request.
2. Provide exactly three alternative implementations, each clearly marked with "---recommendation---".

Each alternative must:
- Use a different structure, layout, or feature set.
- Explore alternative libraries, color schemes, or UI logic.
- Remain fully working and complete.

🛠 Coding Instructions:
- Prioritize modern best practices (e.g., semantic HTML, responsive design, component structure).
- Avoid placeholder comments (e.g., // insert code here). Provide complete, working code only.
- If UI is requested, provide real CSS or inline styles.
- If image input is provided, infer layout and structure from it.
- If the selected font family is not a common system font (e.g., Arial, Times New Roman, Verdana), include a Google Fonts import link in the <head> section.

🎨 Design Constraints:
- Primary color: {primaryColor}
- Secondary color: {secondaryColor}
- Font family: {fontFamily}

🧠 Formatting Guidelines:
- Main implementation comes first.
- Each alternative starts with "---recommendation---".
- Use consistent indentation and clean formatting.

💡 User Request Handling:
Always assume the user expects quality and functional design. If unclear, make logical assumptions and document them briefly in a comment above the code only.

Never include explanatory notes outside code blocks.
`;

AuthRouter.post("/get", async (req, res) => {
  try {
    const { message, imageBase64, primaryColor, secondaryColor, fontFamily } =
      req.body;

    const chatMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT.replace("{primaryColor}", primaryColor)
          .replace("{secondaryColor}", secondaryColor)
          .replace("{fontFamily}", fontFamily),
      },
    ];

    const userContent = [
      {
        type: "text",
        text: `User request: ${message}`,
      },
    ];

    if (imageBase64) {
      userContent.push({
        type: "image_url",
        image_url: {
          url: `data:image/jpeg;base64,${imageBase64}`,
          detail: "high",
        },
      });
    }

    chatMessages.push({ role: "user", content: userContent });

    const modelToUse = imageBase64 ? "gpt-4o" : "gpt-4-turbo";

    const completion = await openai.chat.completions.create({
      model: modelToUse,
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 4096,
    });

    const reply = completion.choices[0].message.content;

    const [mainCode, ...recommendations] = reply.split("---recommendation---");

    res.json({
      mainCode: mainCode.trim(),
      recommendations: recommendations.map((r) => r.trim()).slice(0, 3),
    });
  } catch (error) {
    console.error("Error in /get:", error);
    res.status(500).json({
      error: "Something went wrong while generating response.",
      details: error.message,
    });
  }
});

module.exports = AuthRouter;
