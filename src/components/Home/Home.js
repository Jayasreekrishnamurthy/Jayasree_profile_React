import React from 'react'
import Profile from './Profile'
import Footer from "./Footer"
import "./Home.css"

export default function Home() {
  return (
    <div className='home-container'>
      <Profile/>
      <Footer/>
      
    </div>
  )
}
