// https://nextjs.org/docs/app/getting-started/server-and-client-components#preventing-environment-poisoning
// import "server-only"

import challengesData from "@/data/challenges.json";

// let challengesCache: MinimalChallenge[] | undefined;
export const getChallenges = async (): Promise<MinimalChallenge[]> => {
  // if (challengesCache) return challengesCache;
  // challengesCache = await scrapping();
  return challengesData.slice(0, 20);
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