import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { useEffect, useState } from "react";
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { cx } from "./shared/utils/cx";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // return <Outlet />;

  return (
    <div
      className={cx(
        "w-full m-auto max-w-7xl min-h-screen p-8",
        "flex flex-col",
        "overflow-hidden",
      )}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
//   let message = "Oops!";
//   let details = "An unexpected error occurred.";
//   let stack: string | undefined;
//
//   if (isRouteErrorResponse(error)) {
//     message = error.status === 404 ? "404" : "Error";
//     details =
//       error.status === 404
//         ? "The requested page could not be found."
//         : error.statusText || details;
//   } else if (import.meta.env.DEV && error && error instanceof Error) {
//     details = error.message;
//     stack = error.stack;
//   }
//
//   return (
//     <main className="pt-16 p-4 container mx-auto">
//       <h1>{message}</h1>
//       <p>{details}</p>
//       {stack && (
//         <pre className="w-full p-4 overflow-x-auto">
//           <code>{stack}</code>
//         </pre>
//       )}
//     </main>
//   );
// }

function Page404() {
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

export function ErrorBoundary() {
  return <Page404 />;
}
