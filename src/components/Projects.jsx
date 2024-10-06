import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
      <h3 className='text-5xl font-medium text-white tracking-wide text-center my-12'>Latest Projects</h3>
      <div className='flex flex-wrap gap-7 w-full justify-center'>
        <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' link='' />

        <ProjectCard img='https://t3.ftcdn.net/jpg/06/33/00/42/360_F_633004264_b6ZuRQZYAsZIEYfWdY15EAOiaG4ZJIbn.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' link='' />

        <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' link='' />

        <ProjectCard img='https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg' title='E-commerce project in ReactJS' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt facere in magnam dolor sie.' link='' />
      </div>
    </div>
  )
}

export default Projects