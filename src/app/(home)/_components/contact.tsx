import { ContactForm } from '@/components/contact-form';

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ContactForm />
      </div>
    </section>
  );
}
