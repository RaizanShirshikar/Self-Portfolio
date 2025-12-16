import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { ProjectsShowcase } from '@/components/projects-showcase';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Skills />
        </div>
      </section>
      <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-card/80">
        <div className="container mx-auto px-4 md:px-6">
          <ProjectsShowcase />
        </div>
      </section>
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
