'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type FormState } from '@/lib/actions';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-pink-500/50">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: FormState = { message: '', errors: undefined, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (!state.success && state.message && state.errors) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="flex justify-center" data-aos="fade-up">
      <Card className="w-full max-w-2xl bg-gray-900/50 border border-gray-800 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-700">
        <CardHeader className="text-center p-8">
          <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white">Get in Touch</CardTitle>
          <CardDescription className="text-lg text-gray-400 pt-2">
            Have a project in mind or just want to say hello? Drop me a line.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form ref={formRef} action={dispatch} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-400">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required className="bg-gray-800/60 border-gray-700 rounded-lg focus:ring-purple-500" />
              {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-gray-800/60 border-gray-700 rounded-lg focus:ring-purple-500" />
              {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-400">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." className="min-h-[150px] bg-gray-800/60 border-gray-700 rounded-lg focus:ring-purple-500" required />
              {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
