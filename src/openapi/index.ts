import dotenv from 'dotenv'

dotenv.config()

import { Configuration, OpenAIApi } from 'openai';

const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export function initializeOpenAI() {
  if (!configuration.apiKey) {
    throw new Error(
      'OpenAI API key not found. Please set the OPENAI_API_KEY environment variable.'
    );
  }
  
  return openai;
}
