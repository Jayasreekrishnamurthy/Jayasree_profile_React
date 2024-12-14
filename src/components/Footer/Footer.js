import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube  } from "react-icons/fa";


export const Footer = () => {
    
  return (
    <div className='footer-container1'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                contact Me.
            </p>
            <div className='input-areas'>
                <form>
                    <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'/>
                    <button className='footer-btn1'>Send</button>
                </form>
            </div>

        </section>
        {/* <div class="footer-links1">
        <div className='footer-link-wrapper1'>
            <div class="footer-link-items">
                <h2>lINKS</h2>
                <Link to='/'>github</Link>
                <Link to='/'>github</Link>
                <Link to='/'>github</Link>
                <Link to='/'>github</Link>
            </div>
            <div class="footer-link-items">
                <h2>Contact Us</h2>
                <Link to='/'>github</Link>
                <Link to='/'>github</Link>
                <Link to='/'>github</Link>
                <Link to='/'>github</Link>
            </div>
            
        </div>
        </div> */}
        <section class="social-media">
            <div class="social-media-wrap">
                <div class="footer-logo">
                    <Link to='/' className='social-logo'>
                        JayasreePortfolio &nbsp;
                        <i class="fas fa-route"></i>
                    </Link>
                </div>
                <small class="website-rights">Copyright© 2024: Design and Develop by Jayasree</small>
                <div class="social-icons">
                    <Link class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
              <FaGithub/>

                    </Link>
                    <Link class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>

<FaLinkedin />
                    </Link>
                    <Link class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>

                    <FaInstagram />
                    </Link>
                    <Link class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>

                    <FaYoutube/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}
