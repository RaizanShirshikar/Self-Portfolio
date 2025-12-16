import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Smartphone, Cloud, PenTool, GitMerge } from 'lucide-react';
import type { LucideProps, ReactElement } from 'react';

const skills = [
  { name: 'Frontend', Icon: Code, description: 'React, Next.js, TypeScript, Tailwind CSS' },
  { name: 'Backend', Icon: Database, description: 'Node.js, Express, Firebase, PostgreSQL' },
  { name: 'Mobile', Icon: Smartphone, description: 'React Native, Flutter' },
  { name: 'DevOps & Cloud', Icon: Cloud, description: 'Docker, Vercel, Google Cloud, AWS' },
  { name: 'UI/UX Design', Icon: PenTool, description: 'Figma, UI/UX Principles, Prototyping' },
  { name: 'Version Control', Icon: GitMerge, description: 'Git, GitHub, GitLab, CI/CD' },
];

const SkillIcon = ({ icon: Icon }: { icon: React.ComponentType<LucideProps> }) => (
    <div className="text-accent drop-shadow-[0_0_5px_hsl(var(--accent))]">
        <Icon size={40} />
    </div>
);

export function Skills() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skillset</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
          A collection of technologies and tools I use to bring ideas to life with precision and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-start p-6 text-center bg-card/50 border-border/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader className="p-0 mb-4">
              <SkillIcon icon={skill.Icon} />
            </CardHeader>
            <CardContent className="p-0 flex flex-col items-center">
              <CardTitle className="text-xl font-bold mb-2">{skill.name}</CardTitle>
              <p className="text-muted-foreground flex-grow">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
