import { Link, NavLink } from "react-router";
import ThemeSelector from "./theme_selector";
import imgLogo from "~/assets/images/output.webp";

type Route = { title: string; path: string };
const routes: Route[] = [
  { title: "Inicio", path: "/" },
  { title: "Proyectos", path: "/projects" },
];

const name = "@TM10YMhp";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="font-black text-xl flex items-center">
        <img
          className={[
            "rounded-full mr-2 hover:scale-75 hover:rotate-360",
            "transform transition-transform duration-500",
          ].join(" ")}
          src={imgLogo}
          width="50"
        />
        <p className="max-[560px]:hidden flex items-center">
          {[...name].map((letter, index) => (
            <span
              key={index}
              className={[
                "hover:text-primary hover:-mt-2 hover:duration-100",
                "transition-all duration-200",
              ].join(" ")}
            >
              {letter}
            </span>
          ))}
        </p>
      </Link>
      <ul className="flex items-center space-x-10">
        {routes.map((item) => (
          <li key={item.title}>
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
          <ThemeSelector />
        </li>
      </ul>
    </nav>
  );
}
