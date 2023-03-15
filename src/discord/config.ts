import dotenv from 'dotenv'
import { client } from './bot'
dotenv.config()
const { DISCORD_APPLICATION_ID_KEY, DISCORD_BOT_TOKEN } =
  process.env

if (!DISCORD_APPLICATION_ID_KEY || !DISCORD_BOT_TOKEN) {
  throw new Error('Missing environment variables')
}

const config: Record<string, string> = {
  DISCORD_APPLICATION_ID_KEY,
  DISCORD_BOT_TOKEN,
}

export default config
