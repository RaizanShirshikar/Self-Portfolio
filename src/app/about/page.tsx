import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me | ApexFolio',
    description: 'Learn more about the developer behind ApexFolio, their journey, and their passion for coding.',
};

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === '4');

  return (
    <div className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex justify-center" data-aos="fade-right">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt="Profile picture of John Doe"
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square border-4 border-primary shadow-lg shadow-primary/20"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            )}
          </div>
          <div className="space-y-6" data-aos="fade-left">
            <div className="space-y-2">
              <p className="text-lg text-primary font-semibold">A Developer's Journey</p>
              <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg/relaxed">
              <p>
                Hello! I'm John, a passionate developer with a knack for creating elegant solutions in the least amount of time. My journey into the world of coding started back in high school with a simple "Hello, World!" in Python, and I've been hooked ever since.
              </p>
              <p>
                I thrive on turning complex problems into simple, beautiful, and intuitive designs. I love the entire process of software development, from brainstorming and wireframing to coding and deploying. For me, there's nothing more satisfying than seeing an idea come to life on the screen.
              </p>
              <p>
                When I'm not in front of a computer screen, you can probably find me exploring the great outdoors, experimenting in the kitchen, or getting lost in a good book. I believe in lifelong learning and am always excited to pick up new skills.
              </p>
            </div>
             <Link href="/contact" prefetch={false}>
                <Button size="lg" className="transition-all hover:shadow-[0_0_20px] hover:shadow-accent bg-primary text-primary-foreground hover:bg-primary/90">Let's Connect</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
