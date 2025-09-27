import React from 'react'
import Layout from '@/LayoutComponents/Layout'
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

const index = () => {
  return (
    <Layout>
      <div className='bg-[#4B0082] h-auto  w-full' >
        <HeroSection/>
        <AboutUs/>
        <Services/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </Layout>
  )
}

export default index