import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";


const Services = () => {
    return (
        <div className='text-white flex justify-around items-center mt-14 py-8 w-full'>
            <div className='w-[40%]'>
                <h4 className='capitalize text-4xl font-bold'>Services that i offer</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor aliquam a, fugiat ducimus </p>
            </div>

            <div className='text-5xl font-light'>
                <div className='flex gap-4 items-center p-3 py-5 border-y border-gray-400'>
                    <h5>Frontend Development</h5>
                    <FaSquareArrowUpRight/>
                </div>
                <div className='flex gap-4 items-center p-5 border-y border-gray-400'>
                    <h5>Website Development</h5>
                    <FaSquareArrowUpRight />

                </div>
                <div className='flex gap-4 items-center p-5 border-y border-gray-400'>
                    <h5>Redesign Websites</h5>
                    <FaSquareArrowUpRight />

                </div>
            </div>
            <div className='text-5xl font-light'>
                <div className='flex gap-4 items-center p-3 py-5 border-y border-gray-400'>
                    <h5>Frontend Development</h5>
                    <FaSquareArrowUpRight />
                </div>
                <div className='flex gap-4 items-center p-5 border-y border-gray-400'>
                    <h5>Website Development</h5>
                    <FaSquareArrowUpRight />

                </div>
                <div className='flex gap-4 items-center p-5 border-y border-gray-400'>
                    <h5>Redesign Websites</h5>
                    <FaSquareArrowUpRight />

                </div>
            </div>
            <div className='text-5xl font-light'>
                <div className='flex gap-4 items-center p-3 py-5 border-y border-gray-400'>
                    <h5>Frontend Development</h5>
                    <FaSquareArrowUpRight />
                </div>
                <div className='flex gap-4 items-center p-5 border-y border-gray-400'>
                    <h5>Website Development</h5>
                    <FaSquareArrowUpRight />

                </div>
                <div className='flex gap-4 items-center p-5 border-y border-gray-400'>
                    <h5>Redesign Websites</h5>
                    <FaSquareArrowUpRight />

                </div>
            </div>
        </div>
    )
}

export default Services