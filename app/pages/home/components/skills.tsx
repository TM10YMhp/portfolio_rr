import { cx } from "~/shared/utils/cx";

export function Skills() {
  const skills = [
    {
      title: "HTML",
      icon: "/html5/html5-original.svg",
    },
    {
      title: "CSS",
      icon: "/css3/css3-original.svg",
    },
    {
      title: "Javascript",
      icon: "/javascript/javascript-original.svg",
    },
    {
      title: "Typescript",
      icon: "/typescript/typescript-original.svg",
    },
    {
      title: "NodeJS",
      icon: "/nodejs/nodejs-original.svg",
    },
    {
      title: "Git",
      icon: "/git/git-original.svg",
    },
    {
      title: "NeoVim",
      icon: "/neovim/neovim-original.svg",
    },
    {
      title: "NextJS",
      icon: "/nextjs/nextjs-original-wordmark.svg",
      style: { filter: "invert(1)" },
    },
    {
      title: "TailwindCSS",
      icon: "/tailwindcss/tailwindcss-original.svg",
    },
    {
      title: "AlpineJS",
      icon: "/alpinejs/alpinejs-original.svg",
    },
    {
      title: "React",
      icon: "/react/react-original.svg",
    },
    {
      title: "React Router",
      icon: "/reactrouter/reactrouter-original.svg",
    },
  ];

  return (
    <div className="py-12 gap-10 flex flex-col md:flex-row justify-around relative">
      <p className="relative text-3xl text-center md:text-left font-bold">
        Tengo el conocimiento.
        <br />
        Aqui estan mis herramientas.
        <img
          className="sqD absolute -top-6 -right-6"
          src="/imgs/fillStar.svg"
        />
        <img
          className="sqD absolute -bottom-4 -left-7 max-md:-left-20 max-md:-bottom-20"
          src="/imgs/laptop.svg"
        />
        <img
          className="sqD hidden md:block place-self-start justify-self-end"
          src="/imgs/coding.svg"
        />
      </p>
      <div
        className={cx(
          "relative max-w-lg w-full self-center",
          "grid gap-4 gap-y-8 grid-cols-3 sm:grid-cols-6",
          "items-center place-content-center",
        )}
      >
        {skills.map((item, index) => (
          <div
            title={item.title}
            key={index}
            className="w-10 mx-auto flex items-center flex-col justify-center"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons${item.icon}`}
              className={item.title === "NextJS" ? "invert" : undefined}
            />
            <p className="text-xs text-base-content/70 font-bold mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
