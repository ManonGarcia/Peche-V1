import React from "react";
import ChecklistsBanner from "../../assets/ChecklistsBanner.jpg";

function BannerChecklists() {
    return (
        <div className="checklists_banner" >
            <img src={ChecklistsBanner} alt="" className="checklists_banner_img" />
        </div>
    )
};

export default BannerChecklists;