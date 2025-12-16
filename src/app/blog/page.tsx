import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | ApexFolio',
  description: 'Read the latest articles and tutorials on web development, design, and more.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    date: '2024-07-28',
    excerpt: 'A comprehensive guide to setting up your first Next.js 14 project with App Router and TypeScript.',
    slug: 'getting-started-with-nextjs-14',
  },
  {
    id: 2,
    title: 'The Art of Professional Web Design',
    date: '2024-07-20',
    excerpt: 'Discover the key principles of creating visually stunning and user-friendly web designs.',
    slug: 'art-of-professional-web-design',
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS Gradients',
    date: '2024-07-15',
    excerpt: 'Learn how to create beautiful, custom gradients with Tailwind CSS for your next project.',
    slug: 'mastering-tailwind-css-gradients',
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
            My Blog
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Sharing my knowledge and experience in web development and design.
          </p>
        </div>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-700">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h2 className="text-2xl font-bold text-white mt-2 transition-colors duration-300 group-hover:text-purple-400">
                  {post.title}
                </h2>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
                <div className="text-purple-400 mt-4 font-semibold group-hover:text-pink-400 transition-colors duration-300">
                  Read More &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
