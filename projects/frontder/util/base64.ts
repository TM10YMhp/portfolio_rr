import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (url: string): Promise<string> => {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));
  return base64;
};

export const getMetadata = async (url: string) => {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  return (await getPlaiceholder(Buffer.from(buffer))).metadata
};