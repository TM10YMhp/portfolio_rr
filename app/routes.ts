import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("projects", "routes/projects/index.tsx"),

  route("resources/theme", "routes/resources.theme.ts"),

  route(
    ".well-known/appspecific/com.chrome.devtools.json",
    "routes/devtools-json.ts",
  ),

  route("*", "routes/catchall.tsx"),
] satisfies RouteConfig;
