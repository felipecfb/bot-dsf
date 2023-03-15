import { Client, Events, GatewayIntentBits } from 'discord.js'
import * as commandModules from './commands'

const commands = Object(commandModules)

export const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, (c) => {
  console.log(`🤖 Bot running like ${c.user?.tag}!`)
})

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName } = interaction

  commands[commandName].execute(interaction, client)
})
