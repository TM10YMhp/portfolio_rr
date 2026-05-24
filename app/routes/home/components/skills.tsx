import imgFillStar from "~/assets/images/fillStar.svg";
import imgLaptop from "~/assets/images/laptop.svg";
import imgCoding from "~/assets/images/coding.svg";

const skills = [
  {
    title: "HTML",
    iconUrl: "/html5/html5-original.svg",
  },
  {
    title: "CSS",
    iconUrl: "/css3/css3-original.svg",
  },
  {
    title: "JavaScript",
    iconUrl: "/javascript/javascript-original.svg",
  },
  {
    title: "TypeScript",
    iconUrl: "/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    iconUrl: "/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    iconUrl: "/git/git-original.svg",
  },
  {
    title: "NeoVim",
    iconUrl: "/neovim/neovim-original.svg",
  },
  {
    title: "NextJS",
    iconUrl: "/nextjs/nextjs-original-wordmark.svg",
  },
  {
    title: "TailwindCSS",
    iconUrl: "/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "AlpineJS",
    iconUrl: "/alpinejs/alpinejs-original.svg",
  },
  {
    title: "React",
    iconUrl: "/react/react-original.svg",
  },
  {
    title: "React Router",
    iconUrl: "/reactrouter/reactrouter-original.svg",
  },
];

export function Skills() {
  return (
    <div className="my-10 gap-8 md:gap-0 flex flex-col md:flex-row justify-around">
      <p className="relative text-3xl text-center md:text-left font-bold -z-10">
        Tengo el conocimiento.
        <br />
        Aqui estan mis herramientas.
        <img
          className="animate-float absolute -top-6 -right-6"
          src={imgFillStar}
        />
        <img
          className="animate-float absolute -bottom-4 -left-7 max-md:-left-20 max-md:-bottom-20"
          src={imgLaptop}
        />
        <img
          className="animate-float hidden md:block place-self-start justify-self-end"
          src={imgCoding}
        />
      </p>
      <div
        className={[
          "max-w-lg w-max mx-auto md:mx-0",
          "grid gap-6 gap-y-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6",
          "place-items-center text-center",
        ].join(" ")}
      >
        {skills.map((item, index) => (
          <div
            title={item.title}
            key={index}
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons${item.iconUrl}`}
              className={[
                "w-10 inline",
                item.title === "NextJS" && "invert"
              ].filter(Boolean).join(" ")}
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
