import Image from "next/image";

type CardProps = {
  challenge: MinimalChallenge;
  as?: React.ElementType;
  draggable?: boolean;
  className?: string;
};

export const Card = ({
  challenge,
  as: Component = "div",
  draggable = false,
  className = "",
}: CardProps) => {
  return (
    <Component
      className={[
        "bg-gray-800 rounded-lg overflow-hidden flex flex-col",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      // Si el componente es arrastrable podria usar la prop nativa???
      role={draggable ? "card" : undefined}
    >
      <Image
        alt={challenge.title}
        src={challenge.heroImage}
        /** (;-_-)ノ
         * Si el padre es draggable, la imagen debe ser 'false'.
         * Si el padre NO es draggable, usamos 'undefined' para que
         * el navegador use su comportamiento por defecto (que es true).
         */
        draggable={draggable ? false : undefined}
        width={475}
        height={348}
        className="shrink-0"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9s8IBAACxAE1FlQDGwAAAABJRU5ErkJggg=="
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 line-clamp-1">
          {challenge.title}
        </h2>
        <p className="line-clamp-3 text-white/80">{challenge.description}</p>
      </div>
    </Component>
  );
};
