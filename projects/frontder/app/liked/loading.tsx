import Link from "next/link";

export default function Loading() {
  return (
    <>
      <div className="card px-5 py-4 flex items-center justify-between animate-fade-in">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <i className="nf nf-oct-arrow_left" />
          Volver
        </Link>
      </div>

      <div className="card p-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
        <span className="text-5xl">♠</span>
        <p className="text-lg font-semibold">
          Obteniendo proyectos guardados...
        </p>
      </div>
    </>
  );
}
