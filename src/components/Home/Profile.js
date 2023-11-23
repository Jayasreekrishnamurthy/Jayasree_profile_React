import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import Typical from 'react-typical'
import "./Profile.css"



export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        

                    <a href="https://github.com/Jayasreekrishnamurthy"  target="_blank">
                        <AiFillGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/jayasree-k-274607239" target="_blank">
                        <AiFillLinkedin/>
                    </a>
                    <a href=''>
                        <AiOutlineTwitter/>
                    </a>
                    <a href=''>
                        <AiFillYoutube/>
                    </a>
                    </div>
                {/* <AiFillGithub/> */}
                </div>
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'M <span className='highlighted-text'>Jayasree</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Full stack Developer",
                            2000,
                            "MERN",
                            2000,
                            "Javascript",
                            2000,
                            "Front-End Developer",
                            2000,
                        ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                    Full Stack Developer with 1+ years of hands-on experience
                    {/* experience designing, developing, 
                    and implementing applications and solutions using 
                    a range of technologies and programming languages. 
                    Seeking to leverage broad development experience 
                    and hands-on technical expertise in a challenging 
                    role as a Full Stack Developer. */}
                    </span>
                </span>
            </div>
            <div className='profile-optins'>
                <button className='btn primary-btn'>
                    {""}
                    Hire Me{" "}
                </button>
                <a href="jayasree_resume.pdf" download="Jayasree jayasree_resume">
                    <button className='btn highlighted-btn'>Get Resume</button>
                </a>
            </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>
            
            </div>
        </div>
        </div>
    </div>
  )
}
