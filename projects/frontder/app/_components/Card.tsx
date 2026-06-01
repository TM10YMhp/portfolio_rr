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
        "card overflow-hidden flex flex-col group",
        !draggable && "card-hover",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      // Si el componente es arrastrable podria usar la prop nativa???
      role={draggable ? "card" : undefined}
    >
      <div className="relative shrink-0 overflow-hidden">
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
          className="shrink-0 transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9s8IBAACxAE1FlQDGwAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent" />
      </div>
      <div className="p-4">
        <h2 className="mb-1.5 text-base font-bold tracking-tight line-clamp-1">
          {challenge.title}
        </h2>
        <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">
          {challenge.description}
        </p>
      </div>
    </Component>
  );
};
