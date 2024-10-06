import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className='text-white flex justify-around items- mt-14 py-8 w-full  px-4'>

            <motion.div
                whileInView={{ opacity: [0.5, 1], x: [-100, 0] }}
                transition={{ duration: .4 }}
                className='w-[40%]'
            >
                <div className=''>
                    <h4 className='capitalize text-5xl font-semibold mb-6 '>Services that i offer</h4>
                    <p className='text-xl font-thin text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor aliquam a, fugiat ducimus sadama curs london fuchio namlimoto</p>
                </div>

            </motion.div>

            <div className='text-5xl font-light w-1/2'>
                <motion.div
                    whileInView={{ opacity: [0.5, 1], x: [60, 0] }}
                    transition={{ duration: .5 }}

                    className='flex justify-between gap-8 items-center p-3 py-5 border-y border-gray-400'>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-semibold -mt-3'>01/</span>
                        <h5>Frontend Development</h5>
                    </div>
                    <FaSquareArrowUpRight />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: [0.5, 1], x: [100, 0] }}
                    transition={{ duration: .8 }}

                    className='flex justify-between gap-8 items-center p-3 py-5 border-y border-gray-400'>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-semibold -mt-3'>02/</span>
                        <h5>Frontend Development</h5>
                    </div>
                    <FaSquareArrowUpRight />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: [0.5, 1], x: [150, 0] }}
                    transition={{ duration: 1.1 }}

                    className='flex justify-between gap-8 items-center p-3 py-5 border-y border-gray-400'>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-semibold -mt-3'>03/</span>
                        <h5>Frontend Development</h5>
                    </div>
                    <FaSquareArrowUpRight />
                </motion.div>
            </div>

        </div>
    )
}

export default Services