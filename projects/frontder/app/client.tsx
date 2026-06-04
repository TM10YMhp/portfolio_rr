"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { startDrag } from "@/lib/draggable";

// https://github.com/vercel/next.js/issues/58242
// https://github.com/vercel/next.js/pull/64725#pullrequestreview-2024729548
// import "core-js/features/array/to-reversed";
import { Card } from "./_components/Card";
import { Button } from "./_components/Button";
import { toast } from "react-toastify";
import { removeChallenges, saveChallenge } from "@/services/challenge";

const FinalCard = () => {
  return (
    <div className="card h-full p-8 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
      <span className="text-5xl">♠</span>
      <div>
        <p className="text-lg font-semibold mb-1">
          ¡Revisaste todos los proyectos!
        </p>
        <p className="text-sm text-white/60">
          Mira tus{" "}
          <Link className="text-accent hover:underline" href="/liked">
            favoritos
          </Link>{" "}
          o descubre más en{" "}
          <a
            className="text-accent hover:underline"
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
  );
};

export default function HomePageClient({ data }: { data: MinimalChallengeWithBlur[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const challenges = data.slice(currentIndex, currentIndex + 3);

  const likeChallenge = async () => {
    const challenge = challenges.at(0);
    if (!challenge) {
      toast.error("No hay más proyectos");
      return;
    }

    toast.promise(saveChallenge(challenge), {
      pending: "Guardando...",
      success: `"${challenge.title}" guardado`,
      error: "No se pudo guardar",
    });
  };

  const nextChallenge = () => {
    if (currentIndex === data.length) return;
    setCurrentIndex((x) => x + 1);
  };

  /** REACT 19.2 (`useEffectEvent`):
   * - Elimina la necesidad de `useCallback` en `likeChallenge` y `nextChallenge`.
   * - Rompe el vínculo reactivo: el `useEffect` ahora tiene dependencias vacías `[]`.
   * - Los listeners globales se registran UNA SOLA VEZ al montar el componente.
   * - Evita que el drag se reinicie o cause micro-stuttering, haciéndolo 100% fluido.
   */
  const onDragAction = useEffectEvent((liked: boolean) => {
    if (liked) {
      likeChallenge();
    }
    nextChallenge();
  });

  useEffect(() => {
    const listener = startDrag(onDragAction);
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  const handleLike = async () => {
    likeChallenge();
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

  const isEmpty = currentIndex >= data.length;

  return (
    <div className="flex flex-col gap-4 items-center select-none touch-none overflow-hidden">
      <div className="relative w-80 h-93.75">
        {isEmpty ? (
          <FinalCard />
        ) : (
          challenges
            .map((challenge) => (
              <Card
                key={challenge.id}
                challenge={challenge}
                className="absolute cursor-grab"
                draggable
              />
            ))
            .reverse()
        )}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-2 text-center">
        <Button
          variant="nope"
          onClick={nextChallenge}
          nfIcon="nf-cod-error"
          disabled={isEmpty}
        >
          Saltar
        </Button>
        <Button
          variant="like"
          onClick={handleLike}
          nfIcon="nf-fa-circle_check"
          disabled={isEmpty}
        >
          Me gusta
        </Button>

        <Button onClick={handleReset}>
          <i className="nf nf-fa-refresh pr-1" /> Volver a empezar
        </Button>
        <Button as={Link} href="/liked">
          <i className="nf nf-fa-bookmark pr-1" /> Ver elecciones
        </Button>
      </div>
    </div>
  );
}
