// https://nextjs.org/docs/app/getting-started/server-and-client-components#preventing-environment-poisoning
// import "server-only"

// import challengesData from "../_data/challenges.json";
import * as cheerio from "cheerio";

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
  const res = await fetch("https://www.frontendmentor.io/challenges")
  if (!res.ok) throw new Error("Could not fetch challenges");

  const html = await res.text()
  const $ = cheerio.load(html);

  const script = $("script").eq(-1).html();
  if (!script) throw new Error("Could not find script tag");

  const match = script.match(
    // /^\n\s*self.__next_f.push\(\[1, \"1b:([\s\S]*?)\\n\"\]\)/,
    /^self.__next_f.push\(\[1,\"1f:([\s\S]*?)\\n\"\]\)/,
  );
  if (!match) throw new Error("Could not find extracted data");

  const extract = match[1].replace(/\\"/g, '"');
  const data: Challenge[] = JSON.parse(extract)[3].children[3].challenges;
  return data.map(toMinimalChallenge);
};

let challengesCache: MinimalChallenge[] | undefined;

export const getChallenges = async (): Promise<MinimalChallenge[]> => {
  if (challengesCache) return challengesCache;

  challengesCache = await scrapping();
  return challengesCache;
};

export const getChallengesByIds = async (
  ids: MinimalChallenge["id"][],
): Promise<MinimalChallenge[]> => {
  const challenges = await getChallenges();
  const challengesMap = new Map(challenges.map((x) => [x.id, x]));
  return ids.map((id) => challengesMap.get(id)).filter((x) => x !== undefined);
};

export const saveChallenge = async (
  challenge: MinimalChallenge,
): Promise<void> => {
  const response = await fetch("/api/like", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ challenge }),
  });
  if (!response.ok) throw new Error("Could not like challenge");
};

export const removeChallenges = async () => {
  const response = await fetch("/api/like", {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Could not delete challenges");
  const data = await response.json();
  return { count: data.count };
}