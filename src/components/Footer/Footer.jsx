import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img  className="footer-logo"src={assets.logoname} alt="" />
                <p className='footer-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sed molestias illo! Sit, praesentium earum? Consequuntur dolorum saepe incidunt velit.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
             </div>
            
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        
            <div className="footer-content-right">
                <h2>Get inTouch</h2>
                <ul>
                    <li>+1234567890</li>
                    <li>contact@tastybites.com</li>
                </ul>
            </div>
         </div>
         <hr />
         <p className='footer-copyright'>Copyright 2024 @ TastyBites.com - All Rights Reserved</p>
        
    </div>
  )
}

export default Footer