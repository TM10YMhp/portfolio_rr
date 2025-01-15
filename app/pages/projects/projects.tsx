import { ProjectCard } from "~/components/project_card";
import { projects } from "~/shared/data";
import { cx } from "~/shared/utils/cx";

function Heading() {
  return (
    <div className="py-12 sm:py-20 text-center">
      <p
        className={cx(
          "relative mx-auto w-fit",
          "max-w-2xl lg:max-w-4xl",
          "text-5xl md:text-6xl lg:text-7xl",
          "tracking-tighter mb-10 font-bold",
        )}
      >
        Proyectos
        <img
          className="sqD w-10 -top-10 -right-12 absolute"
          src="/imgs/code.svg"
        />
      </p>
      <p className="text-base-content/70 text-xl sm:text-2xl max-w-3xl mx-auto">
        He creado aplicaciones y sitios web usando desde HTML hasta React. Estos
        son algunos de mis proyectos favoritos.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-start">
      {projects.slice(0, 3).map((item, index) => (
        <ProjectCard key={index} project={item} />
      ))}
    </div>
  );
}

export default Projects;

export function ProjectsPage() {
  return (
    <main className="text-center mb-20">
      <Heading />
      <Projects />
      <p className="py-40 italic text-base-content/70">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-start">
        {projects.slice(3).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </main>
  );
}
