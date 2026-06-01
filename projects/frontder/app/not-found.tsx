import Link from "next/link";

// https://github.com/vercel/next.js/blob/canary/packages/next/src/client/components/http-access-fallback/error-fallback.tsx
// export default function NotFound() {
//   return (
//     <main className="text-center h-[90vh] flex justify-center items-center">
//       <span className="border-r border-white/30 mr-5 pr-6 text-2xl font-medium align-top leading-12">
//         404
//       </span>
//       <span className="text-sm font-normal leading-12">
//         This page could not be found.
//       </span>
//     </main>
//   );
// }

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 animate-fade-in">
      <span className="text-7xl font-bold tracking-tight text-white/10">
        404
      </span>
      <div className="text-center space-y-2">
        <h1 className="text-xl font-semibold">Página no encontrada</h1>
        <p className="text-sm text-white/60">
          La página que buscas no existe o fue movida.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-lg px-4 py-2.5 text-sm font-medium bg-neutral-800 hover:bg-neutral-700 border border-white/10 hover:border-white/20 transition-all duration-200"
      >
        <i className="nf nf-oct-arrow_left pr-1.5" />
        Volver al inicio
      </Link>
    </div>
  );
}
