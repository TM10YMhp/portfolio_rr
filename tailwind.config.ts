import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
import type { Config } from "tailwindcss";
import { enabled_themes } from "./app/shared/config";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  plugins: [daisyui],
  daisyui: {
    // logs: false, // NOTE: https://github.com/saadeghi/daisyui/issues/3036
    themes: [
      {
        light: {
          ...themes["light"],
        },
      },
      {
        dark: {
          ...themes["dark"],
          "base-100": "#000a1f",
          "base-content": "#ffffff",
          "neutral-content": "#7b89a8",
          primary: "#00c7ff",
          secondary: "#192742",
        },
      },
      ...enabled_themes,
    ],
  },
} satisfies Config;
