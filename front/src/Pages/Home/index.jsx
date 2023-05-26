import React, { useEffect, useState } from "react";
import { BannerHome } from "../../componants/Banner/homeBanner";
import DescriptionPanel from "../../componants/Description/description";
import WhatElse from "../../componants/PanelWhatElse/whatElse";

export function Home() {
    const [panels, setPanels] = useState([]);
    useEffect(() => fetchDescription, []);

    function fetchDescription() {
        fetch('http://localhost:3001/panel')
            .then((res) => res.json())
            .then((res) => setPanels(res))
            .catch(console.error);
    };

    return (
        <div>
            <BannerHome />
            <div>
                <div className="home_description">
                    {panels.map((panel, key)=> <DescriptionPanel key={key} title={panel.title} imgUrl={panel.picture} description={panel.description}/>)}
                </div>
                <div>
                    <WhatElse />
                </div>
            </div>
        </div>
    )
};