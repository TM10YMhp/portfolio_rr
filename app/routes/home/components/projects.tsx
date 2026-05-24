import { Link } from "react-router";
import { projects } from "~/shared/data/projects";
import * as styles from "./projects.css";
import { ProjectCard, projectCardContainerStyles } from "~/shared/components/project_card";

export function Projects() {
  return (
    <div id="learnmore" className="scroll-mt-8 my-8">
      <p
        className={[
          "flex items-center relative", // necesario para line
          styles.line,
          "mt-10 md:mt-5 mb-10 mx-auto md:mx-0",
          "font-bold text-center md:text-left text-3xl",
        ].join(" ")}
      >
        Aquí hay algunos de mis proyectos favoritos.
      </p>
      <div className={projectCardContainerStyles}>
        {projects.slice(0, 3).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
      <Link
        to="/projects"
        className={[
          "block px-8 py-3 mt-10 max-w-sm md:max-w-xl mx-auto",
          "border border-primary rounded-full",
          "text-center text-primary hover:text-white",
          "hover:bg-primary transition-colors",
        ].join(" ")}
      >
        Ver Todo
      </Link>
    </div>
  );
}
