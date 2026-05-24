import type { Project } from "../data/projects";
import IconGitHub from "~/assets/icons/github.svg";
import IconExternalLink from "~/assets/icons/external-link.svg";

export const projectCardContainerStyles =
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 items-start";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-sm mx-auto flex flex-col md:justify-center">
      <a
        href={project.link || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "w-full relative p-2",
          "border rounded-xl border-base-content/70",
          "transition hover:border-primary hover:-translate-y-2",
        ].join(" ")}
      >
        <img
          className={[
            "w-full rounded-md",
            project.title === "RPG" && "aspect-[1.4/1] object-cover",
          ]
            .filter(Boolean)
            .join(" ")}
          src={project.img}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex flex-row justify-between items-center">
          <a
            href={project.link || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold"
          >
            {project.title}
          </a>
          <div className="flex flex-row gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:-translate-y-1 w-4.5 h-4.5"
              >
                <img src={IconExternalLink} alt="Link Icon" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:-translate-y-1 w-4.5 h-4.5"
              >
                <img src={IconGitHub} alt="Github Icon" />
              </a>
            )}
          </div>
        </div>
        <p className="text-base-content/70 leading-tight">
          {project.desc}
        </p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={[
                // "hover:opacity-75",
                "bg-primary/25",
                "m-1 py-1 px-2 rounded-lg",
                "text-sm",
              ].join(" ")}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
