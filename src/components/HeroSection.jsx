import React from 'react'

const HeroSection = () => {
    return (
        <div className='py-12 flex flex-col items-center relative'>


            <div className='flex justify-center flex-col items-center relative'>
                <h1 className='text-white text-center text-[6rem] font-black mb-'>Nitin Sisodiya</h1>
                <h2 className='text-white text-center text-5xl tracking-widest font-bold relative z-30'>Software Dev<span className=' bg-gradient-to-r from-gray-600 via-gray-800 to-violet-900 bg-clip-text text-transparent'>eloper</span> & Web Designer</h2>

                <div className=' w-72 absolute z-20 top-24'>
                    <img src="13 5.png" alt="" />
                </div>
            </div>

            <div className='flex justify-around mt-6 font-thin w-full p-3'>
                <div className='text-white text-4xl'>
                    <h4>Frontend Developer.</h4>
                    <button className='text-2xl font-normal px-4 mt-6 border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors py-2 bg-white rounded-full text-black'>Get in touch</button>
                </div>
                <div className='text-white text-4xl'>
                    <h4>Based in Delhi, India.</h4>
                    <button className='text-2xl float-right font-normal px-4 mt-6 border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors py-2 bg-white rounded-full text-black'>Get in touch</button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection