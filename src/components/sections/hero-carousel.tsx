'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/lib/content/site';

const slides = [
  {
    id: 1,
    imageId: '1',
    href: '/projects',
  },
  {
    id: 2,
    imageId: '2',
    href: '/projects',
  },
  {
    id: 3,
    imageId: '3',
    href: '/projects',
  },
];

export function HeroCarousel() {
  const images = PlaceHolderImages;

  return (
    <section className="relative w-full h-[70vh] min-h-[550px] overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className='h-full'>
          {slides.map((slide) => {
            const image = images.find((img) => img.id === slide.imageId);
            return (
              <CarouselItem key={slide.id} className="relative w-full h-full">
                {image && (
                  <Link href={slide.href} className="block w-full h-full group">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      priority={slide.id === 1}
                    />
                     <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </Link>
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none">
          <div 
            className="relative space-y-4 max-w-4xl p-8 rounded-2xl" 
            data-aos="fade-up"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20 rounded-3xl blur-2xl animate-pulse-blur"></div>
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {heroContent.title}
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gray-200 text-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
                {heroContent.subtitle}
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
