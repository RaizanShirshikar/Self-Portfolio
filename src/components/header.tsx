'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/content/site';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-gray-400"
              )} 
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Button asChild className="rounded-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-pink-500/50">
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">Hire Me</Link>
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
                  {siteConfig.name}
                </span>
              </Link>
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={cn(
                    "transition-colors hover:text-white",
                     pathname === link.href ? "text-white" : "text-gray-400"
                  )} 
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                <Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">Hire Me</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
