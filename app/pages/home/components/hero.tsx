import { Link as ScrollLink } from "react-scroll";
import { cx } from "~/shared/utils/cx";

export function Hero() {
  const items = [
    "/imgs/js.svg",
    "/imgs/laptop.svg",
    "/imgs/code.svg",
    "/imgs/dino.svg",
    "/imgs/html.svg",
  ];

  return (
    <div
      className={cx(
        "relative w-full max-w-6xl",
        "pt-20 pb-40 m-auto flex justify-center",
        "text-center flex-col items-center",
      )}
    >
      <p className="text-xl mb-5">Hola, soy Alejandro</p>
      <p
        className={cx(
          "max-w-2xl lg:max-w-4xl",
          "text-5xl md:text-6xl lg:text-7xl",
          "tracking-tighter mb-10 font-bold",
        )}
      >
        Disfruto <span className="text-primary">construyendo</span> y{" "}
        <span className="text-primary">mejorando</span> software
      </p>
      <ScrollLink
        to="learnmore"
        spy={true}
        offset={-30}
        smooth={true}
        duration={500}
        className={cx(
          "cursor-pointer font-bold px-10 z-10",
          "py-4 border-2 text-xl rounded-full",
          "border-base-content",
          "hover:bg-primary hover:text-white",
          "hover:border-primary transition-colors",
        )}
      >
        Conoce más
      </ScrollLink>
      <div
        className={cx(
          "min-w-[42rem] gap-1 lg:gap-8",
          "absolute bottom-0",
          "grid grid-cols-5 grid-rows-[200px] place-items-center",
        )}
      >
        <img
          className="sqD place-self-start justify-self-end"
          style={{ animationDelay: "0.3s" }}
          src={items[0]}
        />
        <img
          className="sqD justify-self-center"
          style={{ animationDelay: "0.5s" }}
          src={items[1]}
        />
        <img
          className="sqD opacity-40 place-self-end justify-self-center"
          style={{ animationDelay: "0.6s" }}
          src={items[2]}
        />
        <img
          className="sqD justify-self-center"
          style={{ animationDelay: "0.7s" }}
          src={items[3]}
        />
        <img
          className="sqD place-self-start"
          style={{ animationDelay: "0.9s" }}
          src={items[4]}
        />
      </div>
    </div>
  );
}
