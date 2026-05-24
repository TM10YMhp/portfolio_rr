import { ProjectCard, projectCardContainerStyles } from "~/shared/components/project_card";
import type { Route } from "./+types";
import { projects } from "~/shared/data/projects";
import imgCode from "~/assets/images/code.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Proyectos" },
    {
      name: "description",
      content:
        "¡Me encanta programar con herramientas como React, NextJS, Tailwind y muchas más! Estos son algunos de mis proyectos favoritos.",
    },
  ];
}

export default function ProjectsPage() {
  return (
    <main className="mb-20">
      <div className="py-12 sm:py-20">
        <p
          className={[
            "relative w-fit mx-auto",
            "max-w-2xl lg:max-w-4xl",
            "text-5xl md:text-6xl lg:text-7xl",
            "tracking-tighter mb-10 font-bold",
          ].join(" ")}
        >
          Proyectos
          <img
            className="animate-float absolute w-10 -top-10 -right-12"
            src={imgCode}
          />
        </p>
        <p className="text-center text-base-content/70 text-xl sm:text-2xl max-w-3xl mx-auto">
          He creado aplicaciones y sitios web usando desde HTML hasta React.
          Estos son algunos de mis proyectos favoritos.
        </p>
      </div>

      <div className={projectCardContainerStyles}>
        {projects.slice(0, 6).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>

      <p className="text-center py-32 italic text-base-content/70">
        🚧 ¡Aqui tengo otros proyectos que he creado con el pasar el tiempo! 🚧
        {/* Oye, oye, oye... ¡Tengo aún más proyectos en{" "} */}
        {/* <a */}
        {/*   className="text-primary underline" */}
        {/*   href="https://github.com/tm10ymhp" */}
        {/*   target="_blank" */}
        {/*   rel="noopener noreferrer" */}
        {/* > */}
        {/*   mi GitHub */}
        {/* </a> */}
        {/* ! */}
      </p>

      <div className={projectCardContainerStyles}>
        {projects.slice(6).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </main>
  );
}
