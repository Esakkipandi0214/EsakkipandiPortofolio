"use client";
import React from "react";
import { Calendar, MapPin, Briefcase, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack MERN Developer",
      company: "Digisailor",
      location: "Tuticorin, India",
      duration: "May 2024 - July 2025",
      description:
        "Leading full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Designed scalable RESTful APIs, integrated databases, optimized performance, and implemented secure authentication flows. Mentored junior developers and enforced clean code architecture.",
      achievements: [
        "Delivered 3 major MERN projects on time, boosting client satisfaction by 30%",
        "Optimized backend performance by 40% and reduced API response times",
        "Implemented CI/CD pipelines and deployed apps on cloud platforms (Render, Vercel, AWS)",
      ],
    },
    {
      title: "Full-Stack Development Mentor",
      company: "Self-Learning & Coaching",
      location: "Online",
      duration: "2023 - Present",
      description:
        "Teaching full-stack MERN development through hands-on projects. Guiding students on backend, frontend, database, and deployment best practices, preparing them for real-world applications.",
      achievements: [
        "Mentored 20+ students to successfully build full-stack projects",
        "Conducted workshops on React, Node.js, MongoDB, and deployment workflows",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "The Mind IT Solution",
      location: "Remote / Tuticorin, India",
      duration: "Dec 2023 – Apr 2024",
      description:
        "Worked on Python Flask applications and applied QA methodologies to real projects, improving code reliability and performance.",
      achievements: [
        "Developed Flask applications with functional backend features",
        "Applied QA testing to ensure high-quality code delivery",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "SRG InfoTech",
      location: "Remote / India",
      duration: "Oct 2022 – Nov 2022",
      description:
        "Contributed to the development of web applications, focusing on functionality and performance improvements.",
      achievements: [
        "Improved application performance and feature functionality",
        "Collaborated with senior developers on web application projects",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "St.Xavier's College",
      location: "Tirunelveli, India",
      duration: "2019 - 2022",
      description: "Focused on software development, web technologies, and programming fundamentals.",
    },
    {
      degree: "Master of Computer Application",
      institution: "Hindusthan College of Arts & Science",
      location: "Coimbatore, India",
      duration: "2022 - 2024",
      description: "Specialized in Full-Stack Development with practical experience in MERN projects.",
    },
  ];

  interface ExperienceItem {
    title?: string;
    company?: string;
    location: string;
    duration: string;
    description: string;
    achievements?: string[];
    degree?: string;
    institution?: string;
  }

  interface ExperienceCardProps {
    item: ExperienceItem;
    index: number;
    isEducation?: boolean;
  }

  const ExperienceCard = ({ item, index, isEducation = false }: ExperienceCardProps) => (
    <div
      className={`relative animate-fade-in`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

      {/* Timeline Dot */}
      <div className="absolute left-4 top-8 w-4 h-4 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"></div>

      {/* Card */}
      <div className="ml-16 pb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                {isEducation ? item.degree : item.title}
              </h3>
              <p className="text-blue-600 font-medium">
                {isEducation ? item.institution : item.company}
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              <div className="flex items-center mb-1">
                <Calendar size={14} className="mr-2" />
                {item.duration}
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-2" />
                {item.location}
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>

          {item.achievements && (
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in MERN stack development, full-stack integration, and teaching others.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="mr-3 text-blue-500" size={24} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Professional Experience
            </h3>
          </div>
          <div className="relative">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} item={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center mb-8">
            <BookOpen className="mr-3 text-blue-500" size={24} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Education
            </h3>
          </div>
          <div className="relative">
            {education.map((edu, index) => (
              <ExperienceCard key={index} item={edu} index={index} isEducation={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
