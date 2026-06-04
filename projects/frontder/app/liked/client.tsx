"use client";

// import { getBase64 } from "@/util/base64";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const Spinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="size-5 text-neutral-700 animate-spin fill-blue-500"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Revalidando...</span>
    </div>
  );
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function LikedClient() {
  const {
    data: savedChallenges = [],
    isLoading,
    isValidating,
  } = useSWR<MinimalChallenge[]>("/api/like/challenges", fetcher);

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
        {isValidating && <Spinner />}
        {!isLoading && (
          <span className="text-sm text-white/60">
            <strong className="text-white">{savedChallenges.length}</strong>{" "}
            proyectos seleccionados
          </span>
        )}
      </div>

      {isLoading && (
        <div className="card p-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
          <span className="text-5xl">♠</span>
          <p className="text-lg font-semibold">
            Recuperando proyectos guardados
          </p>
        </div>
      )}

      {!isLoading && savedChallenges.length === 0 ? (
        <div className="card p-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
          <span className="text-5xl">♠</span>
          <p className="text-lg font-semibold">No hay proyectos guardados...</p>
          <Link
            href="/"
            className="text-sm text-accent hover:underline transition-colors"
          >
            Descubrir proyectos
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] animate-stagger">
          {savedChallenges.map((challenge) => (
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
                  // placeholder="blur"
                  // blurDataURL={await getBase64(challenge.heroImage)}
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
