import { client } from './discord/bot'
import config from './discord/config'

client.login(config.DISCORD_BOT_TOKEN)
