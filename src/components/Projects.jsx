import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
        <h2 className='text-5xl font-medium text-white tracking-wide text-center my-12'>Latest Projects</h2>
        <div className='flex flex-wrap gap-7 w-full justify-center'>
              <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' />

              <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' />

              <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' />

              <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' />
        </div>
    </div>
  )
}

export default Projects