import * as cheerio from "cheerio";
import { writeFile } from "node:fs/promises";

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
  console.log(">>> scrapping");
  const res = await fetch("https://www.frontendmentor.io/challenges");
  if (!res.ok) throw new Error("Could not fetch challenges");

  const html = await res.text();
  const $ = cheerio.load(html);

  const script = $("script").eq(-1).html();
  if (!script) throw new Error("Could not find script tag");

  const match = script.match(
    // /^\n\s*self.__next_f.push\(\[1, \"1b:([\s\S]*?)\\n\"\]\)/,
    /^self.__next_f.push\(\[1,\"1f:([\s\S]*?)\\n\"\]\)/,
  );
  if (!match) throw new Error("Could not find extracted data");

  const extract = match[1].replace(/\\"/g, '"');
  // use unknown and zod???
  const data: Challenge[] = JSON.parse(extract)[3].children[3].challenges;
  return data.map(toMinimalChallenge);
};

const createJsonFile = async () => {
  const filePath = "./data/challenges.json";
  const data = await scrapping();
  await writeFile(filePath, JSON.stringify(data, null, 2));
};

createJsonFile();