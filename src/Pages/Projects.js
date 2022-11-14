import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import {projects_arr} from './Database/projects_data'

function Projects() {
  
  return (
    <div className='projects'>
{/* 
      <div>
        <input>Search</input>
      </div> */}

      <div className='projects__tags'>
          {/* <h5 className='pro__cat'>Category: </h5>
          <h5>Machine learning(5)</h5>
          <h5>ROS(3)</h5>
          <h5>Python(6)</h5>
          <h5>Machine learning(5)</h5>
          <h5>ROS(3)</h5>
          <h5>Python(6)</h5>
          <h5>Machine learning(5)</h5>
          <h5>ROS(3)</h5>
          <h5>Python(6)</h5>

          <h5 className='pro__cat'>Level: </h5>
          <h5>Beginner(5)</h5>
          <h5>Intermediate(3)</h5>
          <h5>Advanced(6)</h5> */}
         
         
      </div>

      <div className='projects__lists'> 

        {projects_arr.map((item)=>{
          return(
                <ProjectCard pname = {item.pname} descr = {item.description} level={item.level} tags={item.tags}  img={item.img_url} github={item.github}/>
          )
        })}
        
  
      </div>

    </div>
  )
}

export default Projects