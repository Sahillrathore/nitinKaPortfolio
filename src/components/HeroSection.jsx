import React from 'react'

const HeroSection = () => {
    return (
        <div className='py-12 flex justify-center flex-col items-center'>
            <h1 className='text-white text-center text-[6rem] font-black mb-'>Nitin Sisodiya</h1>
            <h2 className='text-white text-center text-5xl font-bold relative z-30'>Software Dev<span className=' bg-gradient-to-r from-gray-600 via-gray-800 to-violet-900 bg-clip-text text-transparent'>eloper</span> & Web Developer</h2>

            <div className=' w-72 relative -top-24 z-20'>
                <img src="13 5.png" alt="" />
            </div>

            <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-00 relative  border-gray-400">
                    <span className="absolute inset-0 transform skew-x-12 bg-gray-300 rounded-md"></span>
                    <span className="relative">Button2</span>
                </button>

                <button className="px-4 py-2 bg-gray-00 relative  border-gray-400">
                    <span className="absolute inset-0 transform skew-x-12 bg-gray-300 rounded-md"></span>
                    <span className="relative">Button2</span>
                </button>

                <button className="px-4 py-2 bg-gray-00 relative  border-gray-400">
                    <span className="absolute inset-0 transform skew-x-12 bg-gray-300 rounded-md"></span>
                    <span className="relative">Button2</span>
                </button>3
                
            </div>

            
        </div>
    )
}

export default HeroSection