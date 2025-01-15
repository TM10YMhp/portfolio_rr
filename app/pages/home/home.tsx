import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export function HomePage() {
  return (
    <main className="space-y-20 mb-20">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
