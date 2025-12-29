import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me | Raizaan',
    description: 'Learn more about Raizaan Shirshikar, their journey, and passion for coding.',
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
                alt="Profile picture of Raizaan Shirshikar"
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
              <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">About Raizaan Shirshikar</h1>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg/relaxed">
              <p>
                I’m an IT professional with hands-on experience in networking, Wi-Fi installation, and system support, with a strong foundation in web development and UI/UX design.
              </p>
              <p>
                I love building clean, user-focused websites and exploring AI tools to improve workflows, productivity, and digital experiences.
              </p>
              <p>
                I enjoy creating practical, reliable solutions while continuously learning modern technologies.
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
