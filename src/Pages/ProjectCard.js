import React from 'react'
import './ProjectCard.css'


function ProjectCard(props) {
  const pname = props.pname;
  const img_url = props.img; 
  const level = props.level;
  const tags = props.tags;
  const descr = props.descr; 
  const github_url = props.github; 

  const tags_arr = tags.split(",")



  return (
    <div className='project__card'>
        <div className='main__container'>
          <div className='pcard__img'>
              <img src={img_url} alt='Cool' />
          </div>  
          <div className='pcard__title'>
              <h2>{pname}<sup className='pcard__star'>{level}</sup></h2>
              <h3>Tags: 
                {tags_arr.map((item)=>{
                  return(
                     <span className='pcard__tags'>{item.trim()}</span> 
                  )
                })}
              </h3>
          </div>

          <div className='pcard__description'>
              <p>{descr}</p>
          </div>

          <div className='pcard__footer'>
              <a href={github_url}><p>Github</p></a>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard