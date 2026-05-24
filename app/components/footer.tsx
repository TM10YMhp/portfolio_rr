import { NavLink } from "react-router";

import IconGitHub from "~/assets/icons/github-f.svg";
import IconLinkedIn from "~/assets/icons/linkedin-f.svg";
import IconMail from "~/assets/icons/mail-f.svg";

const pages = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/projects" },
];

const social = [
  {
    name: "GitHub",
    href: "https://github.com/tm10ymhp",
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tm10ymhp/",
    icon: IconLinkedIn,
  },
  {
    name: "Email",
    href: "mailto:tm10ymhp@protonmail.com",
    icon: IconMail,
  },
];

export function Footer() {
  return (
    <footer
      className={[
        "p-12 border-t border-base-content/20",
        // "grid grid-cols-2 items-start justify-items-center",
        "flex flex-row justify-between min-[505px]:justify-around"
      ].join(" ")}
    >
      <div className="space-y-4 ">
        <p className="uppercase text-base-content/70 font-bold">
          Paginas
        </p>
        {pages.map((link) => (
          <NavLink
            to={link.href}
            key={link.name}
            className={({ isActive }) =>
              [
                isActive
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity",
                "block",
              ].join(" ")
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="space-y-4">
        <p className="uppercase text-base-content/70 font-bold">
          Social
        </p>
        {social.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 hover:text-primary transition-colors"
          >
            <img src={link.icon} width={20} height={20} /> {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
