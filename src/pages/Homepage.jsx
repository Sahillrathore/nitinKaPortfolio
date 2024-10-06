import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollSlider from '../components/ScrollSlider'
import Example from '../components/Tiltcard'

const Homepage = () => {
  return (
    <div className='bg-black'>
      <Header />
      <HeroSection />
      <ScrollSlider />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage