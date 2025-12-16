import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const image = projectImages.find(img => img.id === project.imageId);
          return (
            <Card key={project.id} className="group overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 border-border/50">
              <CardHeader className="p-0 border-b border-border/50">
                  {image && (
                      <Image
                          src={image.imageUrl}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                          data-ai-hint={image.imageHint}
                      />
                  )}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="font-normal">{t}</Badge>
                      ))}
                  </div>
                  <div className="flex gap-2 mt-auto pt-4">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="transition-all hover:bg-accent/10 hover:text-accent hover:border-accent">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm">GitHub</Button>
                      </Link>
                  </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
