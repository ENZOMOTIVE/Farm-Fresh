import { SAMPLE_PRODUCTS } from "../src/utils/constants";



function buildProductContext() {
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
 const apiKey = import.meta.env.VITE_OPENAI_API_KEY


  const prompt = `
You are a helpful bakery assistant. Only answer using the following products. 
Do NOT make up any products or prices.

User: "${userMessage}"

Product information:
${productContext}

Respond politely and concisely.
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
