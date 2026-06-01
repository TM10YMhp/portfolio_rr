import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { getChallengesByIds } from "@/services/challenge";
import { getBase64 } from "@/util/base64";

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
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="card px-5 py-4 flex items-center justify-between animate-fade-in">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <i className="nf nf-oct-arrow_left" />
          Volver
        </Link>
        <span className="text-sm text-white/60">
          <strong className="text-white">{savedChallenges.length}</strong>{" "}
          proyectos seleccionados
        </span>
      </div>

      {savedChallenges.length === 0 ? (
        <div className="card p-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
          <span className="text-5xl">♠</span>
          <p className="text-lg font-semibold">No hay proyectos guardados</p>
          <Link
            href="/"
            className="text-sm text-accent hover:underline transition-colors"
          >
            Descubrir proyectos
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] animate-stagger">
          {savedChallenges.map(async (challenge) => (
            <article
              key={challenge.id}
              className="card card-hover flex flex-col overflow-hidden group"
            >
              <div className="relative shrink-0 overflow-hidden">
                <Image
                  alt={challenge.title}
                  src={challenge.heroImage}
                  width={475}
                  height={348}
                  className="shrink-0 transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={await getBase64(challenge.heroImage)}
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent" />
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex-1 space-y-1.5">
                  <h2 className="text-base font-bold tracking-tight line-clamp-1">
                    {challenge.title}
                  </h2>
                  <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://frontendmentor.io/challenges/${challenge.slug}`}
                >
                  Ver challenge
                  <i className="nf nf-oct-link_external text-xs" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
