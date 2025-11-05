import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} alt="robot image" />
            <h1>{props.user}</h1>
            <p>{props.role}</p>
            <button>View Profile</button>
        </div>
    )
}
export default Card;