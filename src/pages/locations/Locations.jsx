import React from 'react'
import '../../pages/locations/locations.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Centers from '../../components/centers/Centers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Locations = () => {
  return (
    <div>
      <Navbar/>
      <div className="locate">
        <div className="header">
          <div className="title">
            <h1>Available <span>centers</span> for our feeding programme.</h1><br />
            <p>Lets make the world a better place by contributing to the lives of the needy in little ways.</p>
          </div>
        </div>
        <div className="body">
          <div className="search">
            <div className="searchteam">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" /><input type="search" name="search" id="search" placeholder='Search for SPCF Centers' />
            </div>
            <button className='filter'><FontAwesomeIcon icon={faFilter} />  Filter</button>
          </div><br /><br />
          <div className="centers">
            <div className="others">
              <div className="left">
                <Centers type="ikorodu"/>
                <Centers type="island"/>
                <Centers type="badagry"/>
              </div>
              <div className="right">
                <Centers type="mainland"/>
                <Centers type="ikeja"/>
                <Centers type="epe"/>
              </div>
            </div>
            <div className="main"></div>
          </div>
        </div>
      </div><br />
      <Footer/>
    </div>
  )
}

export default Locations