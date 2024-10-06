import { motion } from 'framer-motion'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='py-12 flex flex-col items-center relative'>


            <div className='flex justify-center flex-col items-center mt-16 relative'>
                <motion.h1
                    whileInView={{ opacity: [0.8, 1], x: [-100, 0] }}
                    transition={{ duration: .5 }}
                className='text-white text-center text-[6rem] font-black mb-2'>
                Nitin Sisodiya
                </motion.h1>
                <motion.h3
                    whileInView={{ opacity: [0.8, 1], x: [100, 0] }}
                    transition={{ duration: .5 }}
                className='text-white text-center text-5xl tracking-widest font-bold relative z-30'>Software Dev<span className=' bg-gradient-to-r from-gray-600 via-gray-800 to-violet-900 bg-clip-text text-transparent'>eloper</span> & Web Designer
                </motion.h3>

                <motion.div
                    whileInView={{ opacity: [0.5, 1], scale: [0.4, 1] }}  // Scale transition
                    transition={{ duration: 0.5 }}  // Transition duration
                    className='w-[22rem] absolute z-20 top-24'>
                    <img src="13 5.png" alt="" />
                </motion.div>

            </div>

            <div className='flex justify-around mt-8 font-thin w-full p-3'>
                <div className='text-white text-4xl'>
                    <h4>Frontend Developer.</h4>
                    <button className='text-2xl font-normal px-4 mt-10 border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors py-2 bg-white rounded-full text-black'>Get in touch</button>
                </div>
                <div className='text-white text-4xl'>
                    <h4>Based in Delhi, India.</h4>
                    <button className='text-2xl float-right font-normal px-4 mt-10 border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors py-2 bg-white rounded-full text-black'>Get in touch</button>
                </div>
            </div>

            <div className='text-gray-300 mt-28 text-xl font-normal'>
                <p>Transforming visions into vibrant digital experiences with design and responsive frontend development.</p>
            </div>

        </div>
    )
}

export default HeroSection