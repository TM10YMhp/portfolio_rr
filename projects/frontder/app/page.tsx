import { getChallenges } from "@/services/challenge";
import { Card } from "./_components/Card";
import HomePageClient from "./client";

export default async function Home() {
  const challenges: MinimalChallenge[] = (await getChallenges()).slice(0, 20);

  return (
    <main>
      <HomePageClient data={challenges} />

      <ul
        className={[
          "my-8",
          "grid justify-center gap-4",
          "grid-cols-[repeat(auto-fill,320px)] min-[52rem]:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]",
        ].join(" ")}
      >
        {challenges.map((challenge) => (
          <Card key={challenge.id} as="li" challenge={challenge} />
        ))}
      </ul>
    </main>
  );
}
