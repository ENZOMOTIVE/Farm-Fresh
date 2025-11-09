import { buildProductContext, getAIResponse } from "./api/ai_response";
import type { Request, Response } from "express";
import { supabase} from "./utils/supabase"






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

// receive order from the frontend -> store to database
app.post("/order", async (req: Request, res: Response) => {
  try {
    const { user_email, items, total_price } = req.body;

    // Validate input
    if (!user_email || !Array.isArray(items) || typeof total_price !== "number") {
      return res.status(400).json({ success: false, error: "Invalid order data" });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("orders")
      .insert([{ user_email, items, total_price }]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }

    console.log("🛒 Order saved to Supabase:", data);

    res.status(200).json({
      success: true,
      message: "Order saved successfully",
      order: data,
    });
  } catch (err) {
    console.error("❌ Error in /order route:", err);
    res.status(500).json({ success: false, error: err || "Server error" });
  }
});

//fetch orders from database -> send to dashboard 
app.get("/orders/all", async (req: Request, res: Response) => {
  try {
    // Fetch all orders from Supabase
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false }); // newest first

    if (error) {
      console.error("❌ Supabase fetch error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }

    res.status(200).json({
      success: true,
      orders: data,
    });
  } catch (err) {
    console.error("❌ Error in /orders/all route:", err);
    res.status(500).json({ success: false, error: err || "Server error" });
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
