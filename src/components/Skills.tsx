"use client";
import React from "react";
import { Database, Server, Globe, Monitor, Settings } from "lucide-react";

const About = () => {
  const skills = {
    frontend: [
      "Next.js",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
    ],
    database: ["PostgreSQL", "MongoDB"],
    testing: ["Jest", "Playwright", "Puppeteer"],
    devops: ["Docker", "AWS", "Git", "Postman", "VS Code"],
    languages: ["JavaScript", "TypeScript"],
  };

  interface SkillCardProps {
    icon: React.ElementType;
    title: string;
    skillList: string[];
    delay: number;
  }

  const SkillCard: React.FC<SkillCardProps> = ({
    icon: Icon,
    title,
    skillList,
    delay,
  }) => (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {skillList.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experienced in full-stack MERN development with modern frontend and backend technologies, databases, testing, and DevOps tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={Monitor}
              title="Frontend"
              skillList={skills.frontend}
              delay={200}
            />
            <SkillCard
              icon={Server}
              title="Backend"
              skillList={skills.backend}
              delay={400}
            />
            <SkillCard
              icon={Database}
              title="Databases"
              skillList={skills.database}
              delay={600}
            />
            <SkillCard
              icon={Settings}
              title="Testing"
              skillList={skills.testing}
              delay={800}
            />
            <SkillCard
              icon={Globe}
              title="DevOps / Tools"
              skillList={skills.devops}
              delay={1000}
            />
            <SkillCard
              icon={Globe}
              title="Languages"
              skillList={skills.languages}
              delay={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
