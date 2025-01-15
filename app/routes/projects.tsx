import { ProjectsPage } from "~/pages/projects/projects";

export function meta() {
  return [
    { title: "Proyectos - Alejandro Maturrano" },
    { name: "description", content: "" },
  ];
}

export default function Projects() {
  return <ProjectsPage />;
}
