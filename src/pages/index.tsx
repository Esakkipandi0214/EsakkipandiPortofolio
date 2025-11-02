import React from 'react';
import Layout from '@/LayoutComponents/Layout';
import dynamic from 'next/dynamic';
import AppLoader from '@/components/Loader';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { loading: () => <AppLoader /> });
const AboutUs = dynamic(() => import('@/components/AboutUs'), { loading: () => <AppLoader /> });
const Services = dynamic(() => import('@/components/Services'), { loading: () => <AppLoader /> });
const Projects = dynamic(() => import('@/components/Projects'), { loading: () => <AppLoader /> });
const Contact = dynamic(() => import('@/components/Contact'), { loading: () => <AppLoader /> });
const Experience = dynamic(() => import('@/components/Experience'), { loading: () => <AppLoader /> });
const Skills = dynamic(() => import('@/components/Skills'), { loading: () => <AppLoader /> });

const Index = () => {
  return (
    <Layout>
      <div className="bg-[#4B0082] h-auto w-full">
        <HeroSection />
        <AboutUs />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
