import React from "react";

function FishingSpot(props) {
    return (
        <div className="card__spot">
            <h3>{props.name}</h3>
            <img src={props.imgUrl} alt="" className="img__spot"/>
        </div>
    )
};

export default FishingSpot;