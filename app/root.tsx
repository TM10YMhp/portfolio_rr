import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import CommitMono from "./assets/fonts/CommitMonoV143-Edent.woff2"

import type { Route } from "./+types/root";
import "./app.css";
import { Navbar } from "./components/navbar";
import { themeCookie } from "./utils/theme.server";
import { Footer } from "./components/footer";

// https://github.com/remix-run/react-router/discussions/14682
// https://github.com/sergiodxa/remix-utils#usehydrated

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
  {
    rel: "preload", // pre-cargar fuente
    href: CommitMono,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ theme: string }> {
  const cookieHeader = request.headers.get("Cookie");
  const theme = (await themeCookie.parse(cookieHeader)) ?? "dark";
  return { theme };
}

export function Layout({ children }: { children: React.ReactNode }) {
  // https://github.com/remix-run/remix/discussions/9043
  // https://reactrouter.com/api/framework-conventions/root.tsx#layout-export
  const { theme } = useLoaderData<typeof loader>() ?? {};

  return (
    <html lang="es" data-theme={theme}>
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
  return (
    <div
      className={[
        "w-full m-auto max-w-7xl p-8",
        // "min-h-screen flex flex-col",
        "overflow-hidden",
      ].join(" ")}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
