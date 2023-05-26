import React, { useEffect, useState } from "react";
// import Error from "../../components/Error";
import { useParams } from "react-router-dom";
import SpotTitle from "./titleSpot";
import Collapse from "../Collapse/collapse";

function SpotId() {
    const { id } = useParams();
    const [spots, setSpots] = useState(null);
    useEffect(fetchDataSpot, []);

    function fetchDataSpot() {
        fetch('http://localhost:1234/spots')
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
        <div className="spotsId">
            <div className="img__spotId">
                <img src={spots.picture} alt="" />
            </div>
            <SpotTitle spot={spots} />
            
            <div className="collapse__regulation">
                <Collapse title="REGLEMENT" content={spots.regulation.map((rule, key) => <li key={key}>{rule}</li>)}/>
                <Collapse title="POPULATION" content={spots.population.map((fish, key) => <li key={key}>{fish}</li>)}/>
            </div>
        </div>
    )
};

export default SpotId;