import { useEffect, useState } from "react";
import { Link } from "react-router";
import { cx } from "~/shared/utils/cx";

export function Page404() {
  const [num404, setNum404] = useState("000");

  useEffect(() => {
    const steps = 18;
    const duration = 10;
    const end = 404;

    let count = 0;
    let newNum = end - duration * steps;
    const interval = setInterval(() => {
      count++;
      newNum += steps;
      setNum404(String(newNum));
      if (count === duration) {
        clearInterval(interval);
        setNum404(String(end));
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (num404 === "000") return;

  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col animate-fadeIn">
      <img
        className="object-cover h-48"
        src="https://media1.tenor.com/m/5_xNa2QYmFYAAAAd/ohmygodtu-abokit.gif"
        alt="404"
      />
      <h1 className="text-7xl text-white font-monospace font-bold opacity-100">
        {`{ error: ${num404} }`}
      </h1>
      <p className="text-base-content/70 text-xl mt-8 flex items-center">
        Lo siento, ¡parece que falta esa página!&nbsp;&nbsp;
        <Link to="/">
          <span
            className={cx(
              "text-base px-4 py-1",
              "border rounded-xl",
              "border-primary text-primary",
              "hover:bg-primary hover:text-white",
              "transition-colors cursor-pointer",
            )}
          >
            Regresar al Inicio
          </span>
        </Link>
      </p>
    </div>
  );
}
