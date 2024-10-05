import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ img, title, desc }) => {
    return (
        <div className='w-2/5'>
            <img src={img} alt="" className='w-full rounded-2xl' />
            <div className='p-4 pl-0 flex justify-between items-center'>
                <div>
                    <h3 className='text-3xl mb-2 text-white font-normal'>{title}</h3>
                    <p className='text-gray-300 w-3/4'>{desc}</p>
                </div>
                <div className='p-2 bg-white h-fit rounded-md'>
                    <FaExternalLinkAlt className='text-black text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard