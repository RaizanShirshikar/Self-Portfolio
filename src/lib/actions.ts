'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | undefined;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }
  
  // In a real application, you would integrate an email service here.
  // For demonstration purposes, we'll log the data to the console.
  console.log('New contact form submission:');
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
    errors: undefined,
  };
}
