import { useRef, useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { ClientOnly } from "remix-utils/client-only";
import { enabled_themes } from "~/shared/config";
import { cx } from "~/shared/utils/cx";
import { IconExp } from "./icon_exp";

const routes = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Proyectos",
    path: "/projects",
  },
];

function ThemeSelector() {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "default",
  );

  const themes = [
    { value: "default", label: "Default" },
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    ...enabled_themes.map((x: string) => ({
      value: x,
      label: x.charAt(0).toUpperCase() + x.slice(1),
    })),
    // { value: "retro", label: "Retro" },
    // { value: "cyberpunk", label: "Cyberpunk" },
    // { value: "valentine", label: "Valentine" },
    // { value: "aqua", label: "Aqua" },
    { value: "nude", label: "Nude" }, // https://shkspr.mobi/blog/2024/09/http-ftp-and-dict/
  ];

  const styles = useRef<Element[]>([]);

  const remove = () => {
    document
      .querySelectorAll('style,link[rel="stylesheet"]')
      .forEach((item) => {
        styles.current.push(item);
        item.remove();
      });
  };

  if (theme === "nude") remove();

  const restore = () => {
    styles.current.forEach((item) => document.head.appendChild(item));
    styles.current.splice(0);
  };

  const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    window.localStorage.setItem("theme", value);
    setTheme(() => value);

    if (value === "nude") {
      remove();
    } else {
      restore();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm btn-outline m-1">
        {/* <span>{theme} </span> */}
        <span>
          <IconExp />
        </span>
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        {themes.map((item) => (
          <li key={item.value}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={item.label}
              value={item.value}
              onChange={changeTheme}
              defaultChecked={item.value === theme}
              id={item.value}
            />
            <label className="sr-only" htmlFor={item.value}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="font-black text-xl flex items-center">
        <img
          className={cx(
            "rounded-full mr-2 hover:scale-75 hover:rotate-[360deg]",
            "transform transition-transform duration-500",
          )}
          src="/imgs/output.webp"
          width="60"
        />
        {"@TM10YMhp".split("").map((letter, index) => (
          <span
            key={index}
            className={cx(
              "hover:text-primary hover:-mt-2 hover:duration-100",
              "transition-all duration-500",
            )}
          >
            {letter}
          </span>
        ))}
      </Link>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        <li>
          <ClientOnly>{() => <ThemeSelector />}</ClientOnly>
        </li>
      </ul>
    </nav>
  );
}
