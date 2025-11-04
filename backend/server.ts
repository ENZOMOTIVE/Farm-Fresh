import { buildProductContext, getAIResponse } from "./ai_response";
import type { Request, Response } from "express";



const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET","POST"]
}));
app.use(express.json());

// ✅ POST route to test OpenAI connection
app.post("/ai-response", async (req: Request, res: Response) => {
  try {
    const { message } = req.body; // extract the string
    if (!message || typeof message !== "string") {
      return res.status(400).json({ success: false, error: "Invalid message format" });
    }

    const aiResponse = await getAIResponse(message); // pass string, not object

    console.log("📩 Incoming message:", message);
    console.log("🧠 OpenAI Response:", aiResponse);

    return res.status(200).json({ success: true, aiResponse });
  } catch (error: any) {
    console.error("❌ Error testing OpenAI API:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Unknown error",
    });
  }
});



app.listen(5001, () => {
  try {
    const context = buildProductContext();

    if (context && context.length > 0) {
      console.log("✅ The server started successfully on port 5001!");
    } else {
      console.warn("⚠️ buildProductContext returned empty content.");
    }
  } catch (err) {
    console.error("❌ Error while building product context:", err);
  }
});
