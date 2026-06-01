"use server";

// NOTE: para api privada

import { cookies } from "next/headers";

export const postChallengeAction = async (
  challenge: MinimalChallenge,
): Promise<MinimalChallenge["id"][]> => {
  if (!challenge || !challenge.id) {
    throw new Error("El objeto challenge y su ID son obligatorios.");
  }

  const cookieStore = await cookies();
  const data = cookieStore.get("liked");

  const prevIds: MinimalChallenge["id"][] = data ? JSON.parse(data.value) : [];

  const ids: MinimalChallenge["id"][] = prevIds.includes(challenge.id)
    ? prevIds
    : prevIds.concat(challenge.id);

  cookieStore.set("liked", JSON.stringify(ids), {
    path: "/",
    httpOnly: true,
  });

  return ids;
};

export const deleteChallengeAction = async (): Promise<{ count: number }> => {
  const cookieStore = await cookies();
  const data = cookieStore.get("liked");

  if (!data) return { count: 0 };

  const ids = JSON.parse(data.value) as MinimalChallenge["id"][];

  cookieStore.delete({
    name: "liked",
    path: "/",
  });

  return { count: ids.length };
};
