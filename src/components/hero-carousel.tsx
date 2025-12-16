'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    title: 'Innovative Web Solutions',
    subtitle: 'Crafting pixel-perfect, high-performance websites that captivate and convert.',
    imageId: '1',
  },
  {
    id: 2,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    title: 'Data-Driven Dashboards',
    subtitle: 'Transforming complex data into intuitive, actionable insights with beautiful visualizations.',
    imageId: '2',
  },
  {
    id: 3,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    title: 'Engaging Mobile Apps',
    subtitle: 'Building seamless mobile experiences that users love to interact with every day.',
    imageId: '3',
  },
];

export function HeroCarousel() {
  const images = PlaceHolderImages;

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
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
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-80`}></div>
                 <div className="absolute inset-0 bg-black/40"></div>

                 {/* Animated blur circles */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full animate-pulse-blur" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full animate-pulse-blur" style={{ animationDelay: '3s' }}></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                  <div className="space-y-6 max-w-4xl animate-fade-in-up">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-200">
                      {slide.subtitle}
                    </p>
                    <Button asChild size="lg" className="bg-white text-black font-bold rounded-full px-8 py-6 text-lg hover:bg-gray-200 transition-transform hover:scale-105">
                      <Link href="#projects">View My Work</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
