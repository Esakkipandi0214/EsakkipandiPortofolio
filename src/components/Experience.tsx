
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Digisailor',
      location: 'Tuticorin, India',
      duration: '2024 May - 2025 July',
      description: 'Leading development of enterprise-level web applications using MERN stack. Mentoring junior developers and implementing best practices for code quality and performance.',
      achievements: [
        'Delivered 3 major projects on time, enhancing client satisfaction by 30%',
        'Improved application performance by 40% through optimization',
      ]
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: "St.Xavier's College",
      location: 'Tirunelveli, India',
      duration: '2019 - 2022',
      description: 'Completed as a Fresher level with a focus on Software Development and Web Technologies.',
    },
    {
      degree: 'Master of Computer Application',
      institution: 'Hindusthan Collage of Arts & Science',
      location: 'Coimbatore, India',
      duration: '2022 - 2024',
      description: 'Completed as a Master level with a specialization in Full Stack Development.',
    }
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
    <div className={`relative animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
      {/* Timeline Line */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg"></div>

      {/* Content */}
      <div className="ml-16  pb-12">
        <div className="bg-card bg-[#d2d0d0] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">{isEducation ? item.degree : item.title}</h3>
              <p className="text-blue-600 font-medium">{isEducation ? item.institution : item.company}</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0">
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

          {/* Description */}
          <p className="text-foreground/80 mb-4">{item.description}</p>

          {/* Achievements */}
          {item.achievements && (
            <div>
              <h4 className="font-semibold mb-2 text-foreground/90">Key Achievements:</h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement: string, achievementIndex: number) => (
                  <li key={achievementIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground/80">{achievement}</span>
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background that shaped my expertise in full-stack development.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="mr-3 text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>
            <div className="relative">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} item={experience} index={index} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <Calendar className="mr-3 text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="relative">
              {education.map((edu, index) => (
                <ExperienceCard key={index} item={edu} index={index} isEducation={true} />
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          {/* <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} />
              <span>Download Resume</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;