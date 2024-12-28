import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextApiRequest, NextApiResponse } from 'next';

const googleApiKey = process.env.GOOGLE_API_KEY;
if (!googleApiKey) {
  throw new Error('GOOGLE_API_KEY is not defined');
}

const genAI = new GoogleGenerativeAI(googleApiKey);

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text
      ? result.response.text()
      : JSON.stringify(result.response);
    return res.status(200).json({ response: responseText });
  } catch (e) {
    console.error('Error occurred while generating AI content', e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
