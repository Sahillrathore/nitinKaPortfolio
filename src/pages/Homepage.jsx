import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Projects from '../components/Projects'

const Homepage = () => {
  return (
    <div className='bg-black'>
        <Header/>
        <HeroSection/>
        <Services/>
        <Projects/>
    </div>
  )
}

export default Homepage