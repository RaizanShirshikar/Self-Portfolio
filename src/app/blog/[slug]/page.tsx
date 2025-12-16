import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real app, you'd fetch this from a CMS
  const post = {
    title: `Blog Post: ${params.slug}`,
    description: `This is a placeholder for the blog post with slug: ${params.slug}`,
  };

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Raizaan`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 lg:py-32 bg-background text-white">
      <div className="container mx-auto px-4 md:px-6">
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <h1>Your Blog Post Title for "{params.slug}"</h1>
          <p className="lead">
            This is the lead paragraph for your blog post. It's designed to grab the reader's attention.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          </p>
          <p>
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </p>
          <h2>Subsection Title</h2>
          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
          </p>
          <pre><code>{`function helloWorld() {
  console.log("Hello, world!");
}`}</code></pre>
          <p>
            Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
          </p>
        </article>
      </div>
    </div>
  );
}

// Add prose styles to globals.css if not already present
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
//
// @layer base {
//   .prose { ... }
//   .prose-invert { ... }
// }
// You may need to install @tailwindcss/typography
// npm install -D @tailwindcss/typography
// and add it to your tailwind.config.js plugins: [require('@tailwindcss/typography')]
