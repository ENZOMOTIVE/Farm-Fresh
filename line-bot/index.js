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

 const openai = new OpenAI({ apiKey:  process.env.OPEN_AI_Key });





const app = express();
app.use('/webhook', line.middleware(config), bodyParser.json());


// Webhook endpoint
app.post('/webhook', async (req, res) => {
  try {
    const events = req.body.events;
    await Promise.all(events.map(handleEvent));
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Handle LINE events
async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') return;

  const userMessage = event.message.text;

  // Filter or sort products based on the user's query (basic example)
  const matchingProducts = SAMPLE_PRODUCTS.slice(0, 3); // top 3 for demo

  // Build Flex Message "bubbles" for each product
  const bubbles = matchingProducts.map((p) => ({
    type: 'bubble',
    hero: {
      type: 'image',
      url: p.image,
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        { type: 'text', text: p.name, weight: 'bold', size: 'lg' },
        { type: 'text', text: p.description, wrap: true, size: 'sm', color: '#666666' },
        { type: 'text', text: `$${p.price}`, size: 'md', weight: 'bold', margin: 'md' },
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'primary',
          action: {
            type: 'uri',
            label: 'Buy Now',
            uri: 'https://your-shop-link.com/products/' + p.id,
          },
        },
        {
          type: 'button',
          style: 'secondary',
          action: {
            type: 'postback',
            label: 'Get Coupon',
            data: JSON.stringify({ type: 'coupon', couponId: '01JYNW8JMQVFBNWF1APF8Z3FS7', productId: p.id }),
          },
        },
      ],
    },
  }));

  try {
    // Send Flex Message with products
    await client.replyMessage(event.replyToken, [
      {
        type: 'flex',
        altText: 'Here are some products you might like!',
        contents: {
          type: 'carousel',
          contents: bubbles,
        },
      },
    ]);
  } catch (err) {
    console.error(err);
    await client.replyMessage(event.replyToken, [
      { type: 'text', text: '⚠️ Error sending product cards.' },
    ]);
  }
}


app.listen(4000, () => console.log('Server running on port 4000'));