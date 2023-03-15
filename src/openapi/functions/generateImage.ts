import { initializeOpenAI } from "..";

interface generateImageProps {
  prompt: string;
}

const openai = initializeOpenAI()

export async function generateImage({ prompt }: generateImageProps) {
  var image_url: string | undefined;

  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });

  image_url = response.data.data[0].url;

  if (!image_url) {
    throw new Error("No image URL returned from OpenAI API.");
  }

  return image_url;
}