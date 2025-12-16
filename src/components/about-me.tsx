import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function AboutMe() {
  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '1M+', label: 'Lines of Code' },
  ];

  return (
    <section className="w-full bg-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="uppercase text-sm font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                About Me
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter">
                Crafting Digital Excellence
              </h2>
            </div>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                Hello! I'm John, a passionate developer with a knack for creating elegant solutions in the least amount of time. My journey into the world of coding started back in high school with a simple "Hello, World!" in Python, and I've been hooked ever since.
              </p>
              <p>
                I thrive on turning complex problems into simple, beautiful, and intuitive designs. I love the entire process of software development, from brainstorming and wireframing to coding and deploying. For me, there's nothing more satisfying than seeing an idea come to life on the screen.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Button asChild className="group h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform duration-300 hover:scale-110">
                <Link href="#">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild className="group h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white transition-transform duration-300 hover:scale-110">
                <Link href="#">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
               <Button asChild className="group h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white transition-transform duration-300 hover:scale-110">
                <Link href="#">
                  <Twitter className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-2xl blur-2xl"></div>
            <Card className="relative bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        {stat.value}
                      </div>
                      <div className="text-sm uppercase tracking-wider text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
