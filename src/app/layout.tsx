import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { AOSProvider } from '@/components/aos-provider';
import { siteConfig } from '@/lib/content/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-sans antialiased bg-black")}>
        <AOSProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AOSProvider>
      </body>
    </html>
  );
}
