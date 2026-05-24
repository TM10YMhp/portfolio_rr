import { useEffect, useState } from "react";
import { Link } from "react-router";
import gifWow from "~/assets/gifs/hai-wow.gif";
import gifMomoi from "~/assets/gifs/momoi.gif";

export default function Catchall() {
  const [num404, setNum404] = useState("000");

  // useEffect(() => {
  //   const steps = 18;
  //   const duration = 10;
  //   const end = 404;

  //   let count = 0;
  //   let newNum = end - duration * steps;
  //   const interval = setInterval(() => {
  //     count++;
  //     newNum += steps;
  //     setNum404(String(newNum));
  //     if (count === duration) {
  //       clearInterval(interval);
  //       setNum404(String(end));
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const end = 404;
    const duration = 1000; // duración total en milisegundos
    const frameRate = 50; // actualizar cada 50ms, mayor fluidez
    const totalFrames = duration / frameRate; // 20 pasos

    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;

      const progress = currentFrame / totalFrames;
      const currentNum = Math.floor(progress * end);

      setNum404(String(currentNum).padStart(3, "0"));

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
        setNum404(String(end));
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="my-20 text-center animate-fade-in">
      <p className="text-7xl font-mono font-bold">
        {num404}
      </p>
      <p className="text-base-content/70 text-xl my-8">
        Lo siento, ¡parece que falta esa página!
      </p>
      <Link
        to="/"
        className={[
          "inline-block px-8 py-3",
          "text-primary",
          "border border-primary rounded-full",
          "transition-colors hover:bg-primary hover:text-white",
        ].join(" ")}
      >
        Regresar al Inicio
      </Link>
      <div className="mt-4 flex flex-row justify-center">
        {/* <img
          className="object-cover h-48"
          src="https://media1.tenor.com/m/5_xNa2QYmFYAAAAd/ohmygodtu-abokit.gif"
          alt="404"
        />
        <img
          className="object-cover h-48"
          src="https://media.tenor.com/yWaLIc5J9WgAAAAi/momoi.gif"
          alt="404"
        />
        <img
          className="object-cover h-48"
          src="https://media.tenor.com/ir96XYKt86oAAAAj/blue-archive-shiroko.gif"
          alt="404"
        />
        <img
          className="object-cover h-32 self-end"
          src="https://media.tenor.com/drxH1lO9cfEAAAAi/dark-souls-bonfire.gif"
          alt="bonfire"
        /> */}
        <img
          className="object-cover h-40 self-center"
          // src="https://media.tenor.com/Pq_uyAgFiCEAAAAi/hai-wow.gif"
          src={gifWow}
          alt="left"
        />
        <img
          className="object-cover h-52 w-36"
          // src="https://media.tenor.com/yWaLIc5J9WgAAAAi/momoi.gif"
          src={gifMomoi}
          alt="404"
        />
      </div>
    </main>
  );
}
