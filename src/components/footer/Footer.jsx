import React from 'react'
import '../../components/footer/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="logof">
                <h3>SPCF</h3>
            </div>
            <div className="linksf">
                <div className="left">
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">What we do</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Schemes</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="">Services</a></li>
                        <li><a href="">Supports</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="subscribe">
                <h3>Subscribe to Our Newsletter</h3><br />
                <div className="message">
                    <input type="email" name="email" id="email" placeholder='Email Address' />
                    <button className='view'>GET STARTED</button>
                </div><br />
                <ul className='smedia'>
                    <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <h5>2023 All Rights Reserved</h5>
        </div>
    </div>
  )
}

export default Footer