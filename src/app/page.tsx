import { HeroCarousel } from '@/components/hero-carousel';
import { AboutMe } from '@/components/about-me';
import { ProjectsShowcase } from '@/components/projects-showcase';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <div id="about" className="py-8 md:py-12 lg:py-16">
        <AboutMe />
      </div>
      <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <ProjectsShowcase />
      </section>
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
