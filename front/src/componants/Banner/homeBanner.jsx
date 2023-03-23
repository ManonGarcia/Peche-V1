import React from "react";
import HomeBanner from "../../assets/HomeBanner.jpg"

export function BannerHome() {
    return (
        <div className="banniere">
            <img src={ HomeBanner } alt="" className="img__banniere"/>
        </div>
    )
};