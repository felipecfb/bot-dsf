import dotenv from 'dotenv'
dotenv.config()
const { DISCORD_APPLICATION_ID_KEY, DISCORD_BOT_TOKEN, DISCORD_GUILD_ID } =
  process.env

if (!DISCORD_APPLICATION_ID_KEY || !DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) {
  throw new Error('Missing environment variables')
}

const config: Record<string, string> = {
  DISCORD_APPLICATION_ID_KEY,
  DISCORD_BOT_TOKEN,
  DISCORD_GUILD_ID,
}

export default config
