import React from 'react'
import './Footer.css'
import {FaFacebookSquare, FaLinkedin, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footermain'>
        <div className='footer'>
            <div className='footerContent'>
                <img src='https://www.odinschool.com/hubfs/OdinSchool%20M22/icons/OS-logo-icon-white.svg' alt='logo'/>
                <h3>IND +91 892 908 3443</h3>
                <h3>hello@odinschool.com</h3>
                <h2>Follow Us</h2>
                <FaFacebookSquare className='icons' size={30}/>
                <FaLinkedin className='icons' size={30}/>
                <FaInstagram className='icons' size={30}/>
                <FaWhatsapp className='icons' size={30}/>
            </div>
            <ul>
                <li><h2>Comapny</h2></li>
                <li>About Us</li>
                <li>Success Stories</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>FAQs</li>
                <li>Reviews</li>
            </ul>
            <ul>
            <li><h2>Bootcamps</h2></li>
                <li>Data Science</li>
                <li>Web Developer</li>
                <li>Performance Marketing</li>
            </ul>
            <ul>
                <li><h2>Resources</h2></li>
                <li>Events</li>
                <li>Odin Talks</li>
                <li>Blog</li>
                <li>Resourse Suit</li>
            </ul>
            <ul>
                <li><h2>PartnerShip</h2></li>
                <li>Talent Solution</li>
                <li>Become A Member</li>
                <li>Training Solution</li>
            </ul>
        </div>
        <div className='textimg'>
                <p><strong>NSDC</strong> Affiliated Partner | A Certified Member of</p>
                <img src='https://www.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/NASSCOM_100X40_Gird.webp?width=150&height=60&name=NASSCOM_100X40_Gird.webp' alt='nascom'/>
                <img src='https://www.odinschool.com/hs-fs/hubfs/OS_Company_Logo/v2/100_X_40/HYSEA_100X40_Gird.webp?width=150&height=60&name=HYSEA_100X40_Gird.webp' alt='hysea'/>
                <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/SHRM.webp?width=150&height=60&name=SHRM.webp' alt='shrm' />
        </div>
        <hr></hr>
        <div className='copyright'>
            <h3>© GreyCampus Edutech Private Limited. All rights reserved</h3>
            <h3>Terms Of Use |
                Privacy Policy |
                Sitemap</h3>
        </div>
    </div>
  )
}

export default Footer