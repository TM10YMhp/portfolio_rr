import * as cheerio from "cheerio";
import { writeFile } from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const toMinimalChallenge = (challenge: Challenge): MinimalChallenge => {
  return {
    id: challenge.id,
    description: challenge.description,
    heroImage: challenge.heroImage,
    slug: challenge.slug,
    title: challenge.title,
  };
};

// https://github.com/microsoft/TypeScript/issues/12936
const scrapping = async (): Promise<MinimalChallenge[]> => {
  const res = await fetch("https://www.frontendmentor.io/challenges");
  if (!res.ok) throw new Error("Could not fetch challenges");

  const html = await res.text();
  const $ = cheerio.load(html);

  const script = $("script").eq(-1).html();
  if (!script) throw new Error("Could not find script tag");

  const match = script.match(
    // /^\n\s*self.__next_f.push\(\[1, \"1b:([\s\S]*?)\\n\"\]\)/,
    /^self.__next_f.push\(\[1,\"1b:([\s\S]*?)\\n\"\]\)/,
  );
  if (!match) throw new Error("Could not find extracted data");

  const extract = match[1].replace(/\\"/g, '"');
  // use unknown and zod???
  const data: Challenge[] = JSON.parse(extract)[3].children[3].challenges;
  // los primeros 50 challenges son suficientes
  return data.slice(0, 50).map(toMinimalChallenge);
};

export const getBase64 = async (url: string): Promise<string> => {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));
  return base64;
};

const createJsonFile = async () => {
  console.log(">>> Initiating scrapping...");
  const data = await scrapping();
  console.log(">>> Done scrapping");
  await writeFile("./data/challenges.json", JSON.stringify(data, null, 2));

  console.log(">>> Generating blurData...");
  const blurDataArray = await Promise.all(
    data.map(async (x) => {
      return {
        [x.id]: await getBase64(x.heroImage),
      };
    }),
  );
  const blurData = Object.assign({}, ...blurDataArray) as Record<string, string>;
  console.log(">>> Done generating blurData");
  await writeFile("./data/blurData.json", JSON.stringify(blurData, null, 2));
};

createJsonFile();
