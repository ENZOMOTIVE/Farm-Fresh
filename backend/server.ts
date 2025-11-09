import { buildProductContext, getAIResponse } from "./api/ai_response";
import type { Request, Response } from "express";



const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ✅ POST route to test OpenAI connection
app.post("/ai-response", async (req: Request, res: Response) => {
  try {
    const { message } = req.body; // extract the string

    if (!message || typeof message !== "string") {
      return res
        .status(400)
        .json({ success: false, error: "Invalid message format" });
    }

    // Only runs if message is valid
    const aiResponse = await getAIResponse(message);

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

// receive order from the frontend
app.post("/order", (req: Request, res: Response) => {
  try {
    const { user_email, items, total_price } = req.body;

    // Validate input
    if (!user_email || !Array.isArray(items) || typeof total_price !== "number") {
      return res.status(400).json({ success: false, error: "Invalid order data" });
    }

    // Log the order to the console (frontend can see this in backend logs)
    console.log("🛒 New order received from frontend:");
    console.log("User:", user_email);
    console.log("Items:", items);
    console.log("Total price:", total_price);

    // Send success response to frontend
    res.status(200).json({
      success: true,
      message: "Order received successfully",
      order: { user_email, items, total_price },
    });
  } catch (error: any) {
    console.error("❌ Error in /order route:", error);
    res.status(500).json({ success: false, error: error.message || "Server error" });
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
