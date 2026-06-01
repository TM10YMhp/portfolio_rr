import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { getBase64 } from "@/util/base64";
import { getChallengesByIds } from "@/services/challenge";

async function getSavedChallenges(): Promise<MinimalChallenge[]> {
  const cookieStore = await cookies();
  const data = cookieStore.get("liked");
  if (!data) return [];

  const ids = JSON.parse(data.value);
  return getChallengesByIds(ids);
}

export default async function LikedPage() {
  const savedChallenges: MinimalChallenge[] = await getSavedChallenges();

  return (
    <div className="space-y-4 p-4 pt-0 max-w-4xl mx-auto">
      <div className="flex flex-row justify-between bg-gray-800 px-4 py-3 rounded-lg">
        <Link href="/" className="">
          <i className="nf nf-oct-arrow_left" /> Regresar
        </Link>
        <span>{savedChallenges.length} proyectos seleccionados.</span>
      </div>

      <ul className="space-y-4 px-4">
        {savedChallenges.map(async (challenge) => (
          <li key={challenge.id} className="flex flex-row items-center gap-4">
            <Image
              alt={challenge.title}
              src={challenge.heroImage}
              width={140}
              height={103}
              className="rounded shrink-0"
              // loading="eager"
              placeholder="blur"
              blurDataURL={await getBase64(challenge.heroImage)}
            />
            <div className="space-y-1">
              <h2 className="text-md font-bold line-clamp-1">
                {challenge.title}
              </h2>
              <p className="line-clamp-2 text-white/80">
                {challenge.description}
              </p>
              <a
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://frontendmentor.io/challenges/${challenge.slug}`}
              >
                Ver challenge
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
