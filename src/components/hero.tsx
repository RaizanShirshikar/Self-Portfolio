import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center bg-background overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
       <div className="absolute inset-0 bg-radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(63,81,181,0.1),transparent_70%)"></div>
       <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
              John Doe
            </h1>
            <p className="text-lg md:text-xl text-primary font-semibold">
              Creative Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              I build beautiful, performant, and accessible web experiences from concept to production, with a strong focus on user-centric design.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#projects" prefetch={false}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(var(--accent))]">
                View My Work
              </Button>
            </Link>
            <Link href="/#contact" prefetch={false}>
              <Button size="lg" variant="outline" className="transition-all hover:text-accent hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent)/50%)]">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
