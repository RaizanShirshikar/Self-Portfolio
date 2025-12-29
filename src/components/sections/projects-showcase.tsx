import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a custom CMS, payment integration, and a modern, responsive design.',
    imageId: '1',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-2',
    title: 'SaaS Dashboard',
    description: 'A complex data visualization dashboard for a SaaS product, featuring real-time updates and user authentication.',
    imageId: '2',
    tech: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Mobile Banking App',
    description: 'A concept mobile app for a new digital bank, focusing on a clean UI and intuitive user experience.',
    imageId: '3',
    tech: ['React Native', 'Figma', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export function ProjectsShowcase() {
  const projectImages = PlaceHolderImages;

  return (
    <div className="container mx-auto px-4 md:px-6" data-aos="fade-up">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
          My Portfolio
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Here are some of the projects I'm proud to have worked on, showcasing my skills in design and development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const image = projectImages.find(img => img.id === project.imageId);
          return (
            <Card key={project.id} className="group/card bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-700">
              <div className="overflow-hidden">
                {image && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 aspect-[16/9] transition-transform duration-300 group-hover/card:scale-110"
                        data-ai-hint={image.imageHint}
                    />
                    </Link>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover/card:bg-clip-text group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-pink-600">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-gray-800 text-gray-300 border-none font-normal">{t}</Badge>
                    ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="ghost" className="text-purple-400 hover:text-pink-400 hover:bg-transparent p-0">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-gray-400 hover:text-white hover:bg-transparent p-0">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      View Code <Github className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
      <div className="mt-16 text-center">
        <Button asChild size="lg" className="bg-white text-black font-bold rounded-full px-8 py-6 text-lg hover:bg-gray-200 transition-transform hover:scale-105">
            <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  );
}
