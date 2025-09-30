import React, { Suspense } from 'react';
import Layout from '@/LayoutComponents/Layout';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/HeroSection'));
const AboutUs = dynamic(() => import('@/components/AboutUs'));
const Services = dynamic(() => import('@/components/Services'));
const Projects = dynamic(() => import('@/components/Projects'));
const Contact = dynamic(() => import('@/components/Contact'));
const Experience = dynamic(() => import('@/components/Experience'));
const Skills = dynamic(() => import('@/components/Skills'));

const Index = () => {
  return (
    <Layout>
      <div className='bg-[#4B0082] h-auto w-full'>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <AboutUs />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;


// import React from 'react'
// import Layout from '@/LayoutComponents/Layout'
// import HeroSection from '@/components/HeroSection'
// import AboutUs from '@/components/AboutUs'
// import Services from '@/components/Services'
// import Projects from '@/components/Projects'
// import Contact from '@/components/Contact'
// import Experience from '@/components/Experience'
// import Skills from '@/components/Skills'

// const index = () => {
//   return (
//     <Layout>
//       <div className='bg-[#4B0082] h-auto  w-full' >
//         <HeroSection/>
//         <AboutUs/>
//         <Services/>
//         <Skills/>
//         <Experience/>
//         <Projects/>
//         <Contact/>
//       </div>
//     </Layout>
//   )
// }

// export default index