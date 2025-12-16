import { ContactForm } from '@/components/contact-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | ApexFolio',
    description: 'Get in touch with the developer. Send a message about a project, collaboration, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ContactForm />
      </div>
    </div>
  );
}
