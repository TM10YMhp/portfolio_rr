import { Link } from "react-router";
import { ProjectCard } from "~/components/project_card";
import { projects } from "~/shared/data";
import { cx } from "~/shared/utils/cx";

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="overflow-x-hidden w-full pt-5">
      <p
        className={cx(
          "landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0",
          "text-center md:text-left relative text-3xl",
          "font-bold mb-10 pt-4 md:pt-0 md:w-max",
        )}
      >
        {title}
      </p>
    </div>
  );
}

export function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Aquí hay algunos de mis proyectos favoritos." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
      <Link
        to="/projects"
        className={cx(
          "mt-10 flex-1 w-full max-w-sm md:max-w-2xl mx-auto text-center",
          "border border-primary rounded-full",
          "px-8 py-3 text-primary",
          "hover:bg-primary hover:text-white transition-colors",
        )}
      >
        Ver Todo
      </Link>
    </div>
  );
}
