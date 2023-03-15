import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from './config'
import * as commandModules from './commands'
import { SlashCommandBuilder } from 'discord.js'

type Command = {
  data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
}

const commands = []

for (const module of Object.values<Command>(commandModules)) {
  commands.push(module.data)
}

const rest = new REST({ version: '9' }).setToken(config.DISCORD_BOT_TOKEN)

rest
  .put(
    Routes.applicationGuildCommands(
      config.DISCORD_APPLICATION_ID_KEY,
      config.DISCORD_GUILD_ID,
    ),
    { body: commands },
  )
  .then(() => {
    console.log('Successfully registered application commands.')
  })
  .catch((err) => console.error(err))
