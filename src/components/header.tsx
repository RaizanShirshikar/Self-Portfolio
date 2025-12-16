'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-black/60 backdrop-blur-lg border-b border-gray-800" : "bg-transparent border-b border-transparent"
    )}>
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold" prefetch={false}>
          <span className="font-headline text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            ApexFolio
          </span>
        </Link>
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
          <Link href="#about" className="text-gray-400 transition-colors hover:text-white" prefetch={false}>
            About
          </Link>
          <Link href="#projects" className="text-gray-400 transition-colors hover:text-white" prefetch={false}>
            Projects
          </Link>
          <Link href="/contact" className="text-gray-400 transition-colors hover:text-white" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Button asChild className="rounded-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-pink-500/50">
              <Link href="/contact">Hire Me</Link>
            </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 md:hidden text-white hover:bg-gray-800">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/80 backdrop-blur-xl border-gray-800 text-white">
            <nav className="grid gap-6 text-lg font-medium mt-16">
               <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <span className="font-headline text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  ApexFolio
                </span>
              </Link>
              <Link href="#about" className="text-gray-400 hover:text-white" prefetch={false}>
                About
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-white" prefetch={false}>
                Projects
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white" prefetch={false}>
                Contact
              </Link>
              <Button asChild className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                <Link href="/contact">Hire Me</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
