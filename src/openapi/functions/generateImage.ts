import { initializeOpenAI } from "..";

interface generateImageProps {
  prompt: string;
  n: number;
}

const openai = initializeOpenAI()

export async function generateImage({ prompt, n }: generateImageProps) {
  var image_url: string | undefined;

  const response = await openai.createImage({
    prompt,
    n,
    size: "1024x1024",
  });

  image_url = response.data.data[0].url;

  if (!image_url) {
    throw new Error("No image URL returned from OpenAI API.");
  }

  return image_url;
}