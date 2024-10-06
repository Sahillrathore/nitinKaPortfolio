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
                    <p className='text-gray-200 text-xl'>On my journey</p>
                </div>

                <div className='text-5xl flex gap-4'>
                    <div className='border p-3 rounded-full'><FaGithub /></div>
                    <div className='border p-3 rounded-full'><CiLinkedin /></div>
                </div>
            </div>

            <div className='flex justify-between px-20 py-4'>
                <span className='text-2xl text-white font-bold'>Nitin</span>
                <div className="nav-links flex gap-4">
                    {
                        ['overview', 'about', 'skills', 'contact'].map((item) => (
                            <li key={item} className='list-none'>
                                <NavLink
                                    to={`${item === 'overview' ? '/' : item}`}
                                    className={({ isActive }) =>
                                        `text-lg capitalize hover:text-gray-200 transition-colors font-normal px-1 list ${isActive ? 'text-gray-100' : 'text-gray-300'}`
                                    }
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer