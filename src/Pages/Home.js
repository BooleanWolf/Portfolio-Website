import React from 'react';
import './Home.css';

function Home() {
      const pic_style = {
        width: "500px",
        height:"auto",
        "border-radius": "50px"
    };

  return (

    <div className='home'>

        <div className='home__about'>
            <div className='home__welcomenickname'>
                <h1 className='home__welcome'>MD. Tamim Sarkar</h1>
                <h2 className='home__nickname'>Booleanwolf</h2>
            </div>
            
            <h3 className='home__about'>I am MD Tamim Sarkar. I am a student of Mechanical Engineering in Bangladesh Univeristy of Engineering and Technology. I am an enthusiast in Robotics
                and Artificial Intelligence. I have 2 years of experience in backend web development. 
            </h3>

            <button className='button-30'>Get CV</button>
        </div>
        <div className='home__picture'>
            <img style={pic_style} src='https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/250912393_1294779787608826_1390802645796562916_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=106&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeERi8poJL9tOpP5uIK-u0YkvhaxDt6ranW-FrEO3qtqdQdWFygvulZX-mtgfwurK-1Amuhjar7XrM-pbamPFsvW&_nc_ohc=m4Q7u8yxSX8AX8HyG33&tn=IgjqV8DbnCQidLxZ&_nc_ht=scontent.frjh1-1.fna&oh=00_AfDJKxfSTUNgX6s982DLysn5XYERBROhptzMxsfjY8NieA&oe=6375EB96' alt='Pic'></img>
        </div>

        
        

    </div>
  )
}

export default Home