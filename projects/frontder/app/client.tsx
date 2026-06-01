"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { startDrag } from "@/lib/draggable";

// https://github.com/vercel/next.js/issues/58242
// https://github.com/vercel/next.js/pull/64725#pullrequestreview-2024729548
// import "core-js/features/array/to-reversed";
import { Card } from "./_components/Card";
import { Button } from "./_components/Button";
import { toast } from "react-toastify";
import { removeChallenges, saveChallenge } from "@/services/challenge";

export default function HomePageClient({ data }: { data: MinimalChallenge[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const challenges = data.slice(currentIndex, currentIndex + 3);

  const likeChallenge = async (challenge: MinimalChallenge) => {
    toast.promise(saveChallenge(challenge), {
      pending: "Guardando...",
      success: `"${challenge.title}" guardado`,
      error: "No se pudo guardar",
    });
  };

  const nextChallenge = useCallback(() => {
    if (currentIndex === data.length) return;
    setCurrentIndex((x) => x + 1);
  }, [currentIndex, data.length]);

  useEffect(() => {
    const listener = startDrag((liked) => {
      if (liked) {
        const challenge = challenges.at(-1);
        if (challenge) likeChallenge(challenge);
      }
      nextChallenge();
    });
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [challenges, nextChallenge]);

  const handleLike = async () => {
    const challenge = challenges.at(0);
    if (!challenge) return;
    likeChallenge(challenge);
    nextChallenge();
  };

  const handleReset = async () => {
    const id = toast.loading("Borrando...");

    const resetParams = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    };

    // https://fkhadra.github.io/react-toastify/promise#toastloading
    // https://github.com/fkhadra/react-toastify/blob/main/src/core/toast.ts#L71
    try {
      const { count } = await removeChallenges();
      toast.update(id, {
        ...resetParams,
        type: "success",
        render: `${count} challenges borrados`,
      });
    } catch {
      toast.update(id, {
        ...resetParams,
        type: "error",
        render: "No se pudo borrar",
      });
    }

    setCurrentIndex(0);
  };

  return (
    <div className="flex flex-col gap-4 items-center select-none touch-none overflow-hidden">
      <div className="relative w-80 h-93.75">
        {challenges
          .map((challenge) => (
            <Card
              key={challenge.id}
              challenge={challenge}
              className="absolute cursor-grab"
              draggable
            />
          ))
          .reverse()}
        <div className="content-center h-full border rounded-lg border-gray-600 p-6">
          <p>Esos fueron todos los proyectos.</p>
          <p>
            Haz click{" "}
            <Link className="underline" href="/liked">
              aqui
            </Link>{" "}
            para ver tus elecciones.
          </p>
          <br className="my-2" />
          <p>
            Encuentra más proyectos en{" "}
            <a
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://frontendmentor.io/challenges"
            >
              Frontend Mentor
            </a>
            .
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <Button
          className="bg-red-600"
          onClick={nextChallenge}
          nfIcon="nf-cod-error"
        >
          No me gusta
        </Button>
        <Button
          className="bg-green-600"
          onClick={handleLike}
          nfIcon="nf-fa-circle_check"
        >
          Me gusta
        </Button>
        <Button onClick={handleReset}>Volver a empezar</Button>
        <Button as={Link} href="/liked" className="content-center text-center">
          Ver elecciones
        </Button>
      </div>
    </div>
  );
}
