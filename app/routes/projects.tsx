import { ProjectsPage } from "~/pages/projects/projects";

export function meta() {
  return [
    { title: "Proyectos - Alejandro Maturrano" },
    {
      name: "description",
      content:
        "¡Me encanta programar con herramientas como React, NextJS, Tailwind y muchas más! Estos son algunos de mis proyectos favoritos.",
    },
  ];
}

export default function Projects() {
  return <ProjectsPage />;
}
