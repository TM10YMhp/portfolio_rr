import { getChallenges } from "@/services/challenge";
import { Card } from "./_components/Card";
import HomePageClient from "./client";
import blurData from "@/data/blurData.json";

export default async function Home() {
  const challenges: MinimalChallenge[] = await getChallenges();
  const challengesWithBlur: MinimalChallengeWithBlur[] = challenges.map(
    (challenge) => {
      return {
        ...challenge,
        blurDataURL:
          (blurData as Record<string, string | undefined>)[challenge.id] ||
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9s8IBAACxAE1FlQDGwAAAABJRU5ErkJggg==",
      };
    },
  );

  return (
    <>
      <HomePageClient data={challengesWithBlur} />

      <ul
        className={[
          "my-8",
          "grid justify-center gap-4",
          "grid-cols-[repeat(auto-fill,320px)] min-[52rem]:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]",
        ].join(" ")}
      >
        {challengesWithBlur.map((challenge) => (
          <Card key={challenge.id} as="li" challenge={challenge} />
        ))}
      </ul>
    </>
  );
}
