import type { Route } from "./+types/home";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

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

export default function HomePage() {
  return (
    <main className="space-y-20 mb-20">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
