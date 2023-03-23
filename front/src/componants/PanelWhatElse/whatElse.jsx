import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhatElseContent from "./contentWhatElse";

function WhatElse() {
    const [whatElse, setWhatElse] = useState([]);
    useEffect(() => fetchWhatElse, []);

    function fetchWhatElse() {
        fetch('http://localhost:3001/whatelse')
            .then((res) => res.json())
            .then((res) => setWhatElse(res))
            .catch(console.error);
    };

    return (
        <div>
            <div className="div__sommaire">
                <h2>Quoi d'autre ?</h2>
                <div className="sommaire__flex">
                    {whatElse.map((whatElse, key)=> <WhatElseContent key={key} title={whatElse.title} imgUrl={whatElse.picture} description={whatElse.description}/>)}
                </div>
                <div className="contact__sommaire">
                    <p>Et si vous avez besoin de nous joindre, n'hésitez pas !</p>
                    <Link to="/contact">
                        <button className="btn__sommaire">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default WhatElse;