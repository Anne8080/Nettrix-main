import React from 'react'
import '../../components/centers/centers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Centers = ({type}) => {
    let data;
    switch(type){
        case "ikorodu":
            data={
                h3: "Ikorodu",
                p:"69 Road off kalachala street opp shoprite Lagos state."
            };
            break;
        case "island":
            data={
                h3: "Lagos Island",
                p:"69 Road off kalachala street opp shoprite Lagos state."
            };
            break;
        case "badagry":
            data={
                h3: "Badagry",
                p:"69 Road off kalachala street opp shoprite Lagos state."
            };
            break;
        case "mainland":
            data={
                h3: "Lagos Mainland",
                p:"69 Road off kalachala street opp shoprite Lagos state."
            };
            break;
        case "ikeja":
            data={
                h3: "Ikeja",
                p:"69 Road off kalachala street opp shoprite Lagos state."
            };
            break;
        case "epe":
            data={
                h3: "Epe",
                p:"69 Road off kalachala street opp shoprite Lagos state."
            };
            break;
    }
  return (
    <div className="card">
        <div className="img"></div>
        <div className="info">
            <div className="title">
                <h3>{data.h3}</h3>
                <p>{data.p}</p>
            </div><br />
            <div className="links">
                <a href='' className="locatebtn"><FontAwesomeIcon icon={faLocationDot} /> Locate</a>
                <a href='' className="view">View</a>
            </div>
        </div>
    </div>
  )
}

export default Centers