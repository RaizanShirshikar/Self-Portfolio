import { ProjectsShowcase } from '@/components/sections/projects-showcase';

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <ProjectsShowcase />
    </section>
  );
}
