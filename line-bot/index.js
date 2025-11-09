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

  const catalogText = SAMPLE_PRODUCTS.map(
    p => `${p.name} ($${p.price}): ${p.description}`
  ).join('\n');

  const prompt = `
You are a helpful product assistant. A user asked: "${userMessage}".
Suggest the most relevant products from this catalog:

${catalogText}
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    const replyText = response.choices[0].message.content || "⚠️ I couldn't find any matching products.";

    await client.replyMessage(event.replyToken, [
  { type: 'text', text: replyText }
]);

  } catch (err) {
    console.error(err);
    await client.replyMessage({
      replyToken: event.replyToken,
      messages: [{ type: 'text', text: '⚠️ Error processing your request.' }],
    });
  }
}

app.listen(4000, () => console.log('Server running on port 4000'));