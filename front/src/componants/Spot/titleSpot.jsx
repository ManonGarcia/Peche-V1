import React from "react";

function SpotTitle(props) {
    return (
        <div className="spot__header">
            <div className="spot__header__title">
                <h1>{props.spot.name}</h1>
                <h3>{props.spot.location}</h3>
            </div>
            <div className="spot__header__tags">
                <p>Gestion {props.spot.management}</p>
                <p>{props.spot.size}</p>
                <p>{props.spot.numberOfPosts}</p>
                <p>{props.spot.opening}</p>
                <p>{props.spot.price}</p>
            </div>
        </div>
    )
};

export default SpotTitle;