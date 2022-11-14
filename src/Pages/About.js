import React from 'react';
import './About.css';


function About() {

  const terminal_line = "booleanwolf@ask:"; 

  return (
    <div className='about'>
        <div className='terminal'>
          <div className='terminal_container'>

            <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Full Name"</span></p>
               <p className='answer'>MD Tamim Sarkar</p>
            </div>

            <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Institute"</span></p>
               <p className='answer'>Bangladesh University of Engineering and Technology</p>
            </div>

            <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Department"</span></p>
               <p className='answer'>Mechanical Engineering</p>
            </div>

            <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Date of Birth"</span></p>
               <p className='answer'>16 December 2002</p>
            </div>

             <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Field of Interests"</span></p>
               <p className='answer'>ID &emsp; &emsp;&emsp;&emsp;&emsp;&emsp; Name</p>
               <p className='answer'>--------------------</p>
               <p className='answer'>1&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Robotics</p>
                <p className='answer'>2&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Artificial Intelligence</p>
              </div>

              <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Academic"</span></p>
               <p className='answer'>Board Exam &emsp; &emsp;&emsp;&emsp;&emsp;&emsp; School Name &emsp; &emsp;&emsp;&emsp;&emsp;&emsp; Year &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;  Grade</p>
               <p className='answer'>------------------------------------------------------------------------</p>
               <p className='answer'>PEC&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;Preston Street Primary School&nbsp; &emsp;&emsp;&emsp;2013&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;13.5 (Average: 11.5) </p>
               <p className='answer'>SSC&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;Agrani School and College&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;2018&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;5.0/5.0 </p>
               <p className='answer'>HSC&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;Rajshahi College&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; &emsp;&emsp;&emsp;&emsp;&emsp;2020&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;5.0/5.0 </p>
              </div>


            <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Skills"</span></p>
                <p className='answer'>ID &emsp; &emsp;&emsp;&emsp;&emsp;&emsp; Name</p>
               <p className='answer'>--------------------</p>
               <p className='answer'>1&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Web Development</p>
                <p className='answer'>2&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Python Scripting</p>
            </div>

             <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"Hobby"</span></p>
               <p className='answer'>I love to watch movie in my free time. Moreover, coding has been always my favourite task since my childhood.</p>
            </div>

              <div className='about__pertag'>
               <p> <span className='terminal_line'>{terminal_line}</span>-$ echo <span className='about__ask'>"A little about thyself"</span></p>
               <p className='answer'>I am the laziest creature on this plant. I keep my work pending till the last minute. But when I am learning something, I maintain my consistency.
               I give myself 100days challange in every thing I try to learn, which help me improve day by day in that field. You can see my projects which might reflect my skill and what 
               I love to do.</p>
            </div>


            
               
          </div>
           
        </div>
    </div>
  )
}

export default About