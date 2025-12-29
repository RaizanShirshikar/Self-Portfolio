import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Raizaan',
  description: 'Explore a showcase of projects by Raizaan Shirshikar.',
};

const allProjects = [
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
    {
        id: 'project-4',
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my skills and projects, built with a focus on performance and aesthetics.',
        imageId: '4',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        id: 'project-5',
        title: 'AI Writing Assistant',
        description: 'A web app that uses AI to help users write better content, with features like grammar checking and style suggestions.',
        imageId: '1',
        tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        id: 'project-6',
        title: 'Fitness Tracker App',
        description: 'A mobile application to track workouts, set fitness goals, and monitor progress over time.',
        imageId: '2',
        tech: ['React Native', 'Firebase', 'Chart.js'],
        liveUrl: '#',
        repoUrl: '#',
    },
];

export default function ProjectsPage() {
    const projectImages = PlaceHolderImages;
    return (
        <div className="py-16 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-12" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
                        All Projects
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        A collection of my work, from web applications to mobile concepts.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
                    {allProjects.map((project) => {
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
                            </div>
                        </CardContent>
                        </Card>
                    )
                    })}
                </div>
            </div>
        </div>
    );
}
