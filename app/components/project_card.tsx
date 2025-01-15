import type { Project } from "~/shared/types";
import { cx } from "~/shared/utils/cx";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-sm mx-auto flex flex-col md:justify-center">
      <a
        href={project.link || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          "w-full relative rounded-xl border-base-content/70",
          "border p-2 transition hover:-translate-y-2",
          "hover:border-primary",
        )}
      >
        <img
          className={cx(
            "w-full rounded-md",
            project.title === "RPG" && "aspect-[1.4/1] object-cover",
          )}
          src={project.img}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex justify-between">
          <a
            href={project.link || project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-lg font-bold">{project.title}</p>
          </a>
          <div className="flex flex-row gap-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src="/imgs/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <img
                  src="/imgs/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-base-content/70 text-left leading-tight">
          {project.desc}
        </p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="m-1 text-white rounded-lg text-sm bg-neutral py-1 px-2 hover:opacity-75"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
