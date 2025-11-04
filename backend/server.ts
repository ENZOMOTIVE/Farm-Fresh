import { buildProductContext, getAIResponse } from './ai_response'; // adjust path

export default async function handler(req: any, res: any) {
  // Allow only POST
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, error: 'Invalid message format' });
    }

    const aiResponse = await getAIResponse(message);

    console.log('📩 Incoming message:', message);
    console.log('🧠 OpenAI Response:', aiResponse);

    // CORS headers (optional)
    res.setHeader('Access-Control-Allow-Origin', 'https://treatz-fresh.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    res.status(200).json({ success: true, aiResponse });
  } catch (error: any) {
    console.error('❌ Error testing OpenAI API:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Unknown error',
    });
  }
}
