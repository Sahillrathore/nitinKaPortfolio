import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';


const Footer = () => { 
    
    return (
        <div className='px-20'>
            <div className='flex justify-between items-center border-b border-gray-300 pb-12 px-2 text-white'>
                <div>
                    <h4 className='capitalize font-medium text-6xl '>Follow Me</h4>
                    <p className='text-gray-200 text-xl capitalize'>On my journey</p>
                </div>

                <div className='text-5xl flex gap-4'>
                    <div className='border p-3 rounded-full cursor-pointer'><FaGithub /></div>
                    <div className='border p-3 rounded-full cursor-pointer'><CiLinkedin /></div>
                </div>
            </div>

            <div className='flex justify-between px-20 py-4'>
                <span className='text-2xl text-white font-bold'>Nitin</span>
                <div className="nav-links flex gap-4">
                    {
                        ['overview', 'about', 'skills', 'contact'].map((item) => (
                            <li key={item} className='list-none text-lg capitalize text-white cursor-pointer hover:text-gray-300 transition-colors font-normal px-1 list'>
                                    {item}
                            </li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer