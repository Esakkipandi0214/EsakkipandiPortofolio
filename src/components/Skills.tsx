
import React from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const skills = {
    frontend: ['JavaScript (ES6+)', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
    database: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'Vercel', 'Postman', 'VS Code']
  };

  interface SkillCardProps {
    icon: React.ElementType;
    title: string;
    skillList: string[];
    delay: number;
  }

  const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skillList, delay }) => (
    <div className={`bg-card rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        {skillList.map((skill: string, index: number) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
            <span className="text-foreground/80">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Skills
            </h2>
          </div>
        <div className="max-w-6xl mx-auto">

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={Code}
              title="Frontend"
              skillList={skills.frontend}
              delay={0}
            />
            <SkillCard
              icon={Server}
              title="Backend"
              skillList={skills.backend}
              delay={200}
            />
            <SkillCard
              icon={Database}
              title="Database"
              skillList={skills.database}
              delay={400}
            />
            <SkillCard
              icon={Globe}
              title="Tools"
              skillList={skills.tools}
              delay={600}
            />
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default About;