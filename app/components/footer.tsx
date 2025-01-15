import { NavLink } from "react-router";
import { cx } from "~/shared/utils/cx";

const pages = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Proyectos",
    href: "/projects",
  },
];

const social = [
  {
    name: "GitHub",
    href: "https://github.com/tm10ymhp",
    icon: "imgs/github-f.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tm10ymhp/",
    icon: "imgs/linkedin-f.svg",
  },
  {
    name: "Email",
    href: "mailto:tm10ymhp@protonmail.com",
    icon: "imgs/mail-f.svg",
  },
];

export function Footer() {
  return (
    <footer
      className={cx(
        "mt-auto",
        "w-full py-12 px-8 border-t border-base-content/20 z-5",
        "grid grid-cols-2 justify-between items-start",
      )}
    >
      <div className="text-left space-y-4 mb-8">
        <p className="uppercase text-base-content/70 text-sm font-bold">
          Paginas
        </p>
        {pages.map((link, index) => (
          <NavLink
            to={link.href}
            key={index}
            className={({ isActive }) =>
              cx(
                isActive
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity",
                "block",
              )
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="text-left space-y-4 mb-8">
        <p className="uppercase text-base-content/70 text-sm font-bold">
          Social
        </p>
        {social.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center flex"
          >
            {link.icon && (
              <span className="pr-2 -mb-1">
                <img src={link.icon} width={20} height={20} />
              </span>
            )}
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
