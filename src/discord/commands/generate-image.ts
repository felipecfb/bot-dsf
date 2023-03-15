import { CommandInteraction, SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('openai-generate-image')
  .setDescription('Generate an image with OpenAI API using a phrase.')
  .addStringOption((option) => {
    return option
      .setName('phrase')
      .setDescription('Phrase to generate an image from.')
      .setRequired(true)
  })

export async function execute(interaction: CommandInteraction) {
  const phrase = interaction.options;

  console.log(phrase);

  return interaction.reply('Pong!')
}
