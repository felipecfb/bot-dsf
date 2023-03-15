import { CommandInteraction, SlashCommandBuilder } from 'discord.js'
import { generateImage } from '../../openapi/functions/generateImage';

export const data = new SlashCommandBuilder()
  .setName('generateimage')
  .setDescription('Generate an image with OpenAI API using a phrase.')
  .addStringOption(option => 
    option
      .setName('phrase')
      .setDescription('Generate an image with OpenAI API using a phrase.')
      .setRequired(true)
  )

export async function execute(interaction: CommandInteraction) {
  const prompt = interaction.options.get('phrase')?.value;
  
  await interaction.deferReply()

  const image_url = await generateImage({ prompt: String(prompt) });

  const response = `Here is your image: ${prompt} ${image_url}`

  return interaction.editReply(response)
}
