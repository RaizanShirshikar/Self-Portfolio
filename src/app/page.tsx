import { Hero } from '@/app/(home)/_components/hero';
import { About } from '@/app/(home)/_components/about';
import { Projects } from '@/app/(home)/_components/projects';
import { Contact } from '@/app/(home)/_components/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
