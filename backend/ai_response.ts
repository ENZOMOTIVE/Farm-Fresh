import { SAMPLE_PRODUCTS } from "./utils/constant";

const dotenv = require("dotenv");

dotenv.config();

export function buildProductContext() {
  return SAMPLE_PRODUCTS.map(p =>
    `Product: ${p.name}
Description: ${p.description}
Price: $${p.price}
In Stock: ${p.inStock ? 'Yes' : 'No'}
Tags: ${p.tags.join(', ')}
`
  ).join('\n');
}



export async function getAIResponse(userMessage: string) {
  const productContext = buildProductContext();
  const openai_apikey = process.env.OPENAI_API_KEY;

  if (!openai_apikey) {
    throw new Error("Missing OpenAI API key (OPENAI_API_KEY).");
  }

  const messages = [
    {
      role: "system",
      content: `
You are a helpful bakery assistant. Only answer using the following products. 
Do NOT make up any products or prices. Respond politely and concisely.
Product information:
${productContext}`
    },
    {
      role: "user",
      content: userMessage
    }
  ];

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openai_apikey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // ✅ smaller, faster model for testing
      messages,
      max_tokens: 200,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("OpenAI API error:", data);
    throw new Error(`OpenAI API returned error: ${data.error?.message || "Unknown error"}`);
  }

  if (!data.choices || !data.choices[0]?.message?.content) {
    console.error("Unexpected OpenAI response structure:", data);
    throw new Error("Invalid response from OpenAI API.");
  }

  return data.choices[0].message.content;
}
