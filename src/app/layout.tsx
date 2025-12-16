import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { AOSProvider } from '@/components/aos-provider';

export const metadata: Metadata = {
  title: 'Raizaan | Creative Developer Portfolio',
  description: 'The personal portfolio of a creative full-stack developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-black">
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
