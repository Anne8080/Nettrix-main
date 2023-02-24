import React from 'react'
import '../../components/navbar/navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav">
            <div className="logo">
                <img src="" alt="" />
                <h3>SPCF</h3>
            </div>
            <div className="links">
                <ul>
                    <li><a href="" className='caret'><h5>About Us</h5><FontAwesomeIcon icon={faAngleDown} className='glass' /></a></li>
                    <li><a href=""><h5>News</h5></a></li>
                    <li><a href="" className='caret'><h5>Services</h5><FontAwesomeIcon icon={faAngleDown} className='glass' /></a></li>
                    <li><a href=""><h5>Supermarket</h5></a></li>
                    <li><a href=""><h5>Contact Us</h5></a></li>
                    <li><a href=""><h5>Donate</h5></a></li>
                    <a href='' className="view">Soup Kitchen</a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar