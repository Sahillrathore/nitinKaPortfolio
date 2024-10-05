import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex px-10 py-4 pt-6 justify-between bg-black'>
            <div className='font-bold text-gray-100 text-xl'>
                Nitin
            </div>
            <div className="nav-links flex gap-4">
                {
                    ['overview','about', 'skills', 'contact'].map((item)=>(
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

            <div className='text-gray-200 font-bold text-xl'>
                Resume
            </div>
        </div>
    )
}

export default Header