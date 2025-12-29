import { Github, Linkedin, Instagram } from 'lucide-react';

export const siteConfig = {
    name: "Raizaan",
    description: "The personal portfolio of a creative full-stack developer.",
    title: "Raizaan | Creative Developer Portfolio",
    // You can add your own whatsapp number here.
    // replace with your own whatsapp number.
    // example: "https://wa.me/1234567890"
    whatsappUrl: "https://wa.me/your-number-here", 
};

export const heroContent = {
    title: "Raizaan Shirshikar",
    subtitle: "Creative Developer & UI/UX Designer"
};

export const aboutContent = {
    name: "Raizaan Shirshikar",
    title: "Crafting Digital Excellence",
    description: "I’m an IT professional with hands-on experience in networking, Wi-Fi installation, and system support, with a strong foundation in web development and UI/UX design. I love building clean, user-focused websites and exploring AI tools to improve workflows, productivity, and digital experiences. I enjoy creating practical, reliable solutions while continuously learning modern technologies."
};

export const projectsContent = {
    title: "My Portfolio",
    description: "Here are some of the projects I'm proud to have worked on, showcasing my skills in design and development."
};

export const contactContent = {
    title: "Get in Touch",
    description: "Have a project in mind or just want to say hello? Drop me a line."
};

export const footerContent = {
    description: "IT professional skilled in networking, system support, and web development, passionate about building efficient and reliable digital solutions.",
    socialLinks: [
        { icon: Github, href: '#', hoverColor: 'hover:from-purple-500 hover:to-pink-500', name: 'Github' },
        { icon: Linkedin, href: '#', hoverColor: 'hover:from-blue-500 hover:to-cyan-500', name: 'LinkedIn' },
        { icon: Instagram, href: '#', hoverColor: 'hover:from-pink-500 hover:to-orange-400', name: 'Instagram' },
    ],
    quickLinks: [
        { href: '/about', label: 'About Me' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ]
};
