import { HomePage } from "~/pages/home/home";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alejandro Maturrano - Desarrollador Web." },
    {
      name: "description",
      content:
        "Soy un desarrollador web apasionado que codifica hermosos sitios web y aplicaciones.",
    },
  ];
}

export default function Home() {
  // return <Welcome />;
  return <HomePage />;
}
