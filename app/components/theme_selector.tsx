import { twMerge } from "tailwind-merge";
import { useFetcher, useRouteLoaderData } from "react-router";
import type { loader as RootLoader } from "~/root";

// https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/%2Blayout.server.js
// https://github.com/saadeghi/daisyui/blob/master/packages/daisyui/functions/themeOrder.js
const listThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
];

const BoxTheme = (props: React.ComponentProps<"div">) => {
  return (
    <span
      {...props}
      className={twMerge(
        "bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1",
        props.className,
      )}
    >
      <span className="bg-base-content size-1 rounded-full"></span>
      <span className="bg-primary size-1 rounded-full"></span>
      <span className="bg-secondary size-1 rounded-full"></span>
      <span className="bg-accent size-1 rounded-full"></span>
    </span>
  );
};

const ButtonTheme = () => {
  return (
    <div
      title="Cambiar Tema"
      tabIndex={0}
      role="button"
      className="btn group btn-sm gap-1.5 px-1.5 btn-ghost"
      aria-label="Cambiar Tema"
    >
      <BoxTheme className="group-hover:border-base-content/20 border-base-content/10 border transition-colors" />
      <svg
        width="12px"
        height="12px"
        className="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
  );
};

type ThemeItemProps = {
  value: string;
  label?: string;
  icon?: React.ReactNode;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const ThemeItem = ({
  value,
  label,
  icon,
  checked,
  onChange,
}: ThemeItemProps) => {
  return (
    <li>
      <label className="gap-3 px-2">
        {/* input oculto que controla el cambio de tema */}
        <input
          type="radio"
          name="theme-dropdown"
          className="theme-controller hidden"
          value={value}
          checked={checked}
          onChange={onChange}
        />

        {/* renderizar el ícono/emoji o el BoxTheme */}
        {icon ? (
          <span className="bg-base-100 rounded-md border border-white/5">
            {icon}
          </span>
        ) : (
          <BoxTheme data-theme={value} className="shadow-sm" />
        )}

        <span className={twMerge("w-32 truncate", !label && "capitalize")}>
          {label || value}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={[
            "h-3 w-3 shrink-0",
            // "opacity-0 [input:checked~&]:opacity-100 transition-opacity",
            checked ? "opacity-100" : "opacity-0",
            "transition-opacity",
          ].join(" ")}
        >
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
        </svg>
      </label>
    </li>
  );
};

const toggleCSS = (enable: boolean) => {
  for (const sheet of document.styleSheets) {
    sheet.disabled = !enable;
  }
};

export default function ThemeSelector() {
  const data = useRouteLoaderData<typeof RootLoader>("root")!;
  const fetcher = useFetcher();

  const theme: string =
    (fetcher.formData?.get("theme") as string) ?? data.theme;

  const removeStyles = () => {
    toggleCSS(false);
    // document
    //   .querySelectorAll<HTMLInputElement>('li input[type="radio"]:checked')
    //   .forEach((item) => (item.checked = false));
    fetcher.submit(
      { theme: "raw" },
      { action: "/resources/theme", method: "POST" },
    );
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    toggleCSS(true);
    const value = e.target.value;
    fetcher.submit(
      { theme: value },
      { action: "/resources/theme", method: "POST" },
    );
  };

  return (
    <div className="dropdown dropdown-end block">
      <ButtonTheme />
      <div
        tabIndex={0}
        className={[
          "dropdown-content bg-base-200 text-base-content rounded-box top-px h-122",
          "max-h-[calc(100vh-8.6rem)] overflow-y-auto border-(length:--border) border-white/5",
          "shadow-2xl outline-(length:--border) outline-black/5 mt-16",
        ].join(" ")}
      >
        <ul className="menu w-56">
          <li className="menu-title text-xs">Temas</li>
          {listThemes.map((value) => (
            <ThemeItem
              key={value}
              value={value}
              checked={value === theme}
              onChange={handleChange}
            />
          ))}
          <li></li>
          {/* https://shkspr.mobi/blog/2024/09/http-ftp-and-dict/ */}
          <li className="menu-title text-xs">Experimentos</li>
          <li>
            <button className="gap-3 px-2" onClick={removeStyles}>
              <span className="bg-base-100 rounded-md border border-white/5">
                👻
              </span>
              <span className="w-32 truncate">Nude</span>
            </button>
          </li>
          <ThemeItem
            value="eink"
            checked={"eink" === theme}
            onChange={handleChange}
            icon="📰"
            label="eInk"
          />
          <ThemeItem
            value="xterm"
            checked={"xterm" === theme}
            onChange={handleChange}
            icon="💻"
            label="xterm"
          />
          <ThemeItem
            value="drunk"
            checked={"drunk" === theme}
            onChange={handleChange}
            icon="🥴"
          />
        </ul>
      </div>
    </div>
  );
}
