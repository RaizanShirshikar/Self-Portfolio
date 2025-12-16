import { Hero } from '@/app/(home)/_components/hero';
import { About } from '@/app/(home)/_components/about';
import { Projects } from '@/app/(home)/_components/projects';
import { Contact } from '@/app/(home)/_components/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div id="about" className="py-8 md:py-12 lg:py-16">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
