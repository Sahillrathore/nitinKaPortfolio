import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";


const Services = () => {
    return (
        <div className='text-white flex justify-around items- mt-14 py-8 w-full  px-4'>
            <div className='w-[40%]'>
                <h4 className='capitalize text-5xl font-semibold mb-6 '>Services that i offer</h4>
                <p className='text-xl font-thin text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor aliquam a, fugiat ducimus sadama curs london fuchio namlimoto</p>
            </div>

            <div className='text-5xl font-light w-1/2'>
                <div className='flex justify-between gap-8 items-center p-3 py-5 border-y border-gray-400'>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-semibold -mt-3'>01/</span>
                        <h5>Frontend Development</h5>
                    </div>
                    <FaSquareArrowUpRight />
                </div>
                <div className='flex justify-between gap-8 items-center p-3 py-5 border-y border-gray-400'>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-semibold -mt-3'>01/</span>
                        <h5>Frontend Development</h5>
                    </div>
                    <FaSquareArrowUpRight />
                </div>
                <div className='flex justify-between gap-8 items-center p-3 py-5 border-y border-gray-400'>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-semibold -mt-3'>01/</span>
                        <h5>Frontend Development</h5>
                    </div>
                    <FaSquareArrowUpRight />
                </div>
            </div>

        </div>
    )
}

export default Services