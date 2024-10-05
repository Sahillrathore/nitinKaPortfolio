import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'

const Homepage = () => {
  return (
    <div className='bg-black'>
        <Header/>
        <HeroSection/>
        <Services/>
    </div>
  )
}

export default Homepage