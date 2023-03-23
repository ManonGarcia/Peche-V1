import React, { useEffect, useState } from "react";
import FishingSpot from "../../componants/CardSpots/fishingSpot";

function CardSpots() {
    const [spots, setSpots] = useState([]);
    useEffect(() => fetchDescription, []);

    function fetchDescription() {
        fetch('http://localhost:3001/spots')
            .then((res) => res.json())
            .then((res) => setSpots(res))
            .catch(console.error);
    };

    return (
        <div className="spots">
            <div className="banner__spots">
                <img src="https://www.lemoniteur77.com/content/articles/109745/main_peche-noyade.jpg" alt="" className="imgBanner__spots" />
            </div>
            <div className="grid__spots">
                {spots.map((spot, key)=> <FishingSpot key={key} name={spot.name} imgUrl={spot.picture} id={spot.id}/>)}
            </div>
        </div>
    )
};

export default CardSpots;