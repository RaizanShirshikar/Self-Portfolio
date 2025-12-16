import Link from 'next/link';
import { Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: '#', hoverColor: 'hover:from-purple-500 hover:to-pink-500' },
    { icon: Linkedin, href: '#', hoverColor: 'hover:from-blue-500 hover:to-cyan-500' },
    { icon: Twitter, href: '#', hoverColor: 'hover:from-sky-400 hover:to-blue-600' },
    { icon: Dribbble, href: '#', hoverColor: 'hover:from-pink-500 hover:to-orange-400' },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Raizaan
            </h3>
            <p className="max-w-xs">
              IT professional skilled in networking, system support, and web development, passionate about building efficient and reliable digital solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Get In Touch</h4>
            <p>
              Email: <Link href="mailto:hello@raizaan.com" className="hover:text-white transition-colors">hello@raizaan.com</Link>
            </p>
            <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                        <div className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 hover:text-white hover:bg-gradient-to-r ${social.hoverColor}`}>
                            <social.icon className="w-5 h-5" />
                        </div>
                    </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Raizaan. All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
