// https://github.com/vercel/next.js/blob/canary/packages/next/src/client/components/http-access-fallback/error-fallback.tsx

export default function NotFound() {
  return (
    <main className="text-center h-[90vh] flex justify-center items-center">
      <span className="border-r border-white/30 mr-5 pr-6 text-2xl font-medium align-top leading-12">
        404
      </span>
      <span className="text-sm font-normal leading-12">
        This page could not be found.
      </span>
    </main>
  );
}
