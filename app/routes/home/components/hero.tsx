import imgJs from "~/assets/images/js.svg";
import imgLaptop from "~/assets/images/laptop.svg";
import imgCode from "~/assets/images/code.svg";
import imgDino from "~/assets/images/dino.svg";
import imgHtml from "~/assets/images/html.svg";

export function Hero() {
  const handleClick = () => {
    document.getElementById("learnmore")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl pt-20 pb-40 text-center">
      <p className="text-xl mb-5">Hola, soy Alejandro</p>
      <p
        className={[
          "max-w-2xl lg:max-w-4xl mb-10 mx-auto",
          "font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl",
        ].join(" ")}
      >
        Disfruto <span className="text-primary">construyendo</span> y{" "}
        <span className="text-primary">mejorando</span> software
      </p>
      <button
        className={[
          "px-10 py-4 cursor-pointer transition-colors",
          "font-bold text-xl",
          "border-2 border-base-content rounded-full",
          "hover:bg-primary hover:text-white hover:border-primary",
        ].join(" ")}
        onClick={handleClick}
      >
        Conoce más
      </button>
      <div
        className={[
          "w-full min-w-2xl gap-1 lg:gap-8",
          "absolute -z-10 bottom-0 left-1/2 -translate-x-1/2",
          "grid grid-cols-5 grid-rows-[200px] place-items-center",
        ].join(" ")}
      >
        <img
          className="animate-float [animation-delay:0.3s] place-self-start justify-self-end"
          src={imgJs}
        />
        <img
          className="animate-float [animation-delay:0.5s] justify-self-center"
          src={imgLaptop}
        />
        <img
          className="animate-float [animation-delay:0.6s] opacity-40 place-self-end justify-self-center"
          src={imgCode}
        />
        <img
          className="animate-float [animation-delay:0.7s] justify-self-center"
          src={imgDino}
        />
        <img
          className="animate-float [animation-delay:0.9s] place-self-start"
          src={imgHtml}
        />
      </div>
    </div>
  );
}
