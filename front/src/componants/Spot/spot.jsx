import React, { useEffect, useState } from "react";
// import Error from "../../components/Error";
import { useParams } from "react-router-dom";
import SpotTitle from "./titleSpot";
import Collapse from "../Collapse/collapse"

function SpotId() {
    const { id } = useParams();
    const [spots, setSpots] = useState(null);
    useEffect(fetchDataSpot, []);

    function fetchDataSpot() {
        fetch('http://localhost:3001/spots')
            .then((res) => res.json())
            .then((spots) => {
                const spot = spots.find((spot) => spot.id === id);
                setSpots(spot);
            })
            .catch(console.error);
    }

    // if(apart === false) return (
    //     <Error />
    // );

    if(spots === null) return (
        <div class="spinner">
            <div></div><div></div><div></div><div></div><div></div>
        </div>
    );

    return (
        <div className="spots">
            <div>
                <img src={spots.picture} alt="" />
            </div>
            <SpotTitle spot={spots} />
            
            <div className="collapse__regulation">
                <Collapse title="Description" content={spots.description}/>
                <Collapse title="Equipements" content={spots.equipments}/>
            </div>
        </div>
    )
};

export default SpotId;