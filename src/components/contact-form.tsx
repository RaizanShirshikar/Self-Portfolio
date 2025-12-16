'use client';

import { useFormState, useFormStatus } from 'react-dom';
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
    <Button type="submit" disabled={pending} size="lg" className="w-full transition-all hover:shadow-[0_0_20px] hover:shadow-accent bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: FormState = { message: '', errors: undefined, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
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
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl bg-card/50 border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Get in Touch</CardTitle>
          <CardDescription className="text-muted-foreground md:text-lg pt-2">
            Have a project in mind or just want to say hello? Drop me a line.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={dispatch} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
              {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." className="min-h-[150px]" required />
              {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
