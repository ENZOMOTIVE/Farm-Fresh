import express from 'express';
import { Client, middleware } from '@line/bot-sdk';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { SAMPLE_PRODUCTS } from './products.js';

dotenv.config();

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET
};

const client = new Client(config);
const app = express();

app.use(middleware(config));
app.use(bodyParser.json());



// LINE Webhook
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

// Event Handler
async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const userMessage = event.message.text.toLowerCase();

  // Check if user asks about a product
  const product = SAMPLE_PRODUCTS.find(p =>
    p.name.toLowerCase().includes(userMessage) ||
    p.category.toLowerCase().includes(userMessage)
  );

  if (product) {
    const message = {
      type: 'flex',
      altText: `${product.name} - $${product.price}`,
      contents: {
        type: 'bubble',
        hero: {
          type: 'image',
          url: product.image,
          size: 'full',
          aspectMode: 'cover'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            { type: 'text', text: product.name, weight: 'bold', size: 'lg' },
            { type: 'text', text: `Price: $${product.price}`, size: 'sm', color: '#888888' },
            { type: 'text', text: `Rating: ${product.rating} ⭐ (${product.reviews} reviews)`, size: 'sm', color: '#555555' },
            { type: 'text', text: product.description, size: 'sm', color: '#333333', wrap: true }
          ]
        }
      }
    };

    return client.replyMessage(event.replyToken, message);
  }

  // Default reply
  return client.replyMessage(event.replyToken, { type: 'text', text: "Sorry, I couldn't find that product." });
}

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
