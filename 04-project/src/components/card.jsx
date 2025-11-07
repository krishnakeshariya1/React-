import React from "react";
import { Bookmark } from 'lucide-react';
const Card = (props ,idx)=>{
    return(
         <div className="card">
        <div className="top">
          <img src={props.obj.companyLogo} alt={props.obj.companyName} />
          <button>Save <Bookmark /></button>
        </div>
        <div className="tag">
        <div className="center">
          <h3>{props.obj.companyName} <span> { props.obj.datePosted} </span> </h3>
          <h2>{props.obj.role}r</h2>
          <div className="btn">
            <button>{props.obj.tag}</button>
            <button>{props.obj.tag2}</button>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>${props.obj.payPerHour}/hr</h3>
            <p>{props.obj.location.city}, {props.obj.location.country}</p>
          </div>
          <button>Apply Now</button>
        </div>
        </div>
      </div>
    )
}
export default Card;