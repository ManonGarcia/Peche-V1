import React from "react";
import { Link } from "react-router-dom";

function FishingSpot(props) {
    return (
        <Link to={`/spot/${props.id}`} state={{spotId: props.id}}>
            <div className="card__spot">
                <h3>{props.name}</h3>
                <img src={props.imgUrl} alt="" className="img__spot"/>
            </div>
        </Link>
    )
};

export default FishingSpot;