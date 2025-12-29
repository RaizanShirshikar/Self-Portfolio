# Raizaan's Portfolio - A Next.js Starter

Welcome to your personal portfolio, built with Next.js, Tailwind CSS, and ShadCN UI components. This guide will walk you through how to easily customize and manage the content of your website.

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Editing Text Content](#editing-text-content)
    - [Main Site Content](#main-site-content)
    - [Blog Posts](#blog-posts)
    - [Contact Form Messages](#contact-form-messages)
3.  [Editing Images](#editing-images)
    - [Project & Profile Images](#project--profile-images)
    - [Hero Carousel Images](#hero-carousel-images)
4.  [Managing Projects](#managing-projects)
5.  [Project Structure Overview](#project-structure-overview)

---

## Getting Started

To start the development server, run the following command in your terminal:

```bash
npm run dev
```

This will start the app on `http://localhost:9002`.

---

## Editing Text Content

Most of the text on your website is centralized in one file to make updates simple.

### Main Site Content

For almost all text—including your name, headlines, descriptions, button text, and social media links—you only need to edit one file:

-   **File Location**: `src/lib/content/site.ts`

This file exports several JavaScript objects (`siteConfig`, `heroContent`, `aboutContent`, etc.) that contain the text used across the site.

**Example: Changing the Hero Title**

1.  Open `src/lib/content/site.ts`.
2.  Find the `heroContent` object.
3.  Modify the `title` property:

    ```javascript
    export const heroContent = {
        // Change this text
        title: "Your New Title Here",
        subtitle: "Creative Developer & UI/UX Designer"
    };
    ```

**Example: Updating your WhatsApp Number**

1.  Open `src/lib/content/site.ts`.
2.  Find the `siteConfig` object.
3.  Modify the `whatsappUrl` property:

    ```javascript
    export const siteConfig = {
        // ...other properties
        // Replace 'your-number-here' with your actual number (e.g., "https://wa.me/1234567890")
        whatsappUrl: "https://wa.me/your-number-here", 
    };
    ```

### Blog Posts

Blog post summaries are managed in:

-   **File Location**: `src/app/blog/page.tsx`

To add, remove, or edit the blog post previews on the main blog page, modify the `blogPosts` array in this file. The actual content for each blog post is located in its own file within the `src/app/blog/[slug]/` directory. For a full-fledged blog, you would typically connect this to a headless CMS.

### Contact Form Messages

The success and error messages for the contact form can be changed in:

-   **File Location**: `src/lib/actions.ts`

Look for the `submitContactForm` function to find the messages.

---

## Editing Images

Your site's images are also managed from central locations.

### Project & Profile Images

All images for your projects, your "About Me" photo, and other site-wide images are defined in:

-   **File Location**: `src/lib/placeholder-images.json`

To change an image:

1.  **Upload your image** to a hosting service (like Imgur, Cloudinary, or your own hosting).
2.  **Get the public URL** for the image.
3.  Open `src/lib/placeholder-images.json`.
4.  Find the image you want to replace by its `id` or `description`.
5.  Update the `imageUrl` with your new URL.

```json
{
  "id": "1",
  "description": "e-commerce project",
  "imageUrl": "https://your-new-image-url.com/image.jpg",
  "imageHint": "website ecommerce"
}
```

### Hero Carousel Images

The images that appear in the homepage hero section are managed directly in the component file:

-   **File Location**: `src/components/sections/hero-carousel.tsx`

To change the images or their links, edit the `slides` array. Each object in the array needs an `id`, the `imageId` (which must match an `id` from `placeholder-images.json`), and the `href` where the image should link to.

```javascript
const slides = [
  {
    id: 1,
    imageId: '1', // Corresponds to an image in placeholder-images.json
    href: '/projects', // Link for the image
  },
  // Add more slides here
];
```

---

## Managing Projects

Your projects are listed in two main places: the showcase on the homepage and the full listing on the projects page.

-   **Homepage Showcase**: `src/components/sections/projects-showcase.tsx`
    -   Modify the `projects` array to control which projects are featured on the homepage.
-   **All Projects Page**: `src/app/projects/page.tsx`
    -   Modify the `allProjects` array to manage the complete list of your work.

To add a new project, add a new object to the `allProjects` array. Make sure the `imageId` corresponds to an image you've defined in `src/lib/placeholder-images.json`.

**Example: Adding a new project**

```javascript
const allProjects = [
    // ...existing projects
    {
      id: 'project-new',
      title: 'My New Awesome App',
      description: 'A brief description of this amazing new project.',
      imageId: '5', // Make sure '5' exists in placeholder-images.json
      tech: ['Next.js', 'Firebase', 'Genkit'],
      liveUrl: '#', // Link to live demo
      repoUrl: '#', // Link to GitHub repo
    },
];
```

---

## Project Structure Overview

-   `src/app/`: Contains all the pages of your site.
-   `src/components/`: Reusable components (like buttons, cards, header, footer).
-   `src/components/sections/`: Larger page sections (like Hero, About Me, etc.).
-   `src/lib/`: Utility functions and content management.
-   `src/lib/content/site.ts`: **(IMPORTANT)** Central file for most text content.
-   `src/lib/placeholder-images.json`: **(IMPORTANT)** Central file for image URLs.
-   `public/`: Static assets like favicons or permanent images can go here.
-   `src/app/globals.css`: Global styles and Tailwind CSS configuration.
