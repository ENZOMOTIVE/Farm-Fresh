import express from 'express';
import * as line from '@line/bot-sdk';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { SAMPLE_PRODUCTS } from './products.js';
import OpenAI from 'openai';



dotenv.config();



const config = {
channelAccessToken: "2yQhcZHJIFnfYqYk4he6vVS/Cqgr3CovfOfesc1+3DYCDpi73bGPUTA3ymabUPhlG2TtdFNMR6YtkN6/abTczlDlrow+znbZJwUSOL90/njY4tTZpoOvI/PwTGz840mmmjfTy9EqTZRAhu0QUSAXLgdB04t89/1O/w1cDnyilFU=",
    channelSecret: "1dce35da519bc10dd215873102b2a25d",

}

// Messaging client
const client = new line.Client(config);






const app = express();

app.use('/webhook', line.middleware(config), bodyParser.json());
// Build product context for AI
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

/**
 * Convert multiple products into a LINE Carousel Template
 */
function productsToCarouselTemplate(products) {
  const slicedProducts = products.slice(0, 6); // adjust number of columns if needed
  return {
    type: "template",
    altText: "Recommended products for you",
    template: {
      type: "carousel",
      columns: slicedProducts.map((product) => ({
        thumbnailImageUrl: product.image,
        imageAspectRatio: "rectangle",
        imageSize: "cover",
        imageBackgroundColor: "#FFFFFF",
        title: product.name.substring(0, 40),
        text: `Price: $${product.price} | In Stock: ${product.inStock ? 'Yes' : 'No'}`.substring(0, 60),
        defaultAction: {
          type: "uri",
          label: "View Details",
          uri: `https://yourshop.com/products/${product.id}`
        },
        actions: [
          { type: "postback", label: "Buy Now", data: `action=buy&itemid=${product.id}` },
          { type: "uri", label: "View Details", uri: `https://yourshop.com/products/${product.id}` }
        ]
      }))
    }
  };
}



// Get AI response based on user message
async function getAIResponse(userMessage) {
  const productContext = buildProductContext();
  const openai_apikey = process.env.OPEN_AI_Key;

  if (!openai_apikey) throw new Error("Missing OpenAI API key (OPEN_AI_KEY).");

  const messages = [
    {
      role: "system",
      content: `
You are a helpful multilingual bakery assistant.
Reply in the same language as the user.
Only suggest products from the list below — do NOT invent new products.
If recommending products, always return a structured list using exact product names in this format:

RECOMMENDED_PRODUCTS:
<product_name>
<product_name>
...

Do not add any other text for product lists.
Otherwise, reply normally in text.

Product information:
${productContext}
`
    },
    { role: "user", content: userMessage }
  ];

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openai_apikey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 300,
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

/**
 * Handle LINE webhook events
 */
async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') return;

  const userMessage = event.message.text;

  try {
    const aiResponse = await getAIResponse(userMessage);

    // Check if AI returned a structured RECOMMENDED_PRODUCTS list
    let matchedProducts = [];
    if (aiResponse.includes("RECOMMENDED_PRODUCTS:")) {
      const productLines = aiResponse
        .split('\n')
        .map(l => l.trim())
        .filter(l => l && !l.startsWith("RECOMMENDED_PRODUCTS:"));
      matchedProducts = SAMPLE_PRODUCTS.filter(p => productLines.includes(p.name));
    }

    if (matchedProducts.length > 0) {
      // Send as carousel
      await client.replyMessage(event.replyToken, productsToCarouselTemplate(matchedProducts));
    } else {
      // Default: send plain text
      await client.replyMessage(event.replyToken, { type: 'text', text: aiResponse });
    }

  } catch (err) {
    console.error("Error handling AI response:", err);
    await client.replyMessage(event.replyToken, {
      type: 'text',
      text: 'Sorry, there was an error processing your request. Please try again.',
    });
  }
}

/**
 * Webhook endpoint
 */
app.post('/webhook', (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.status(200).send('OK'))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
