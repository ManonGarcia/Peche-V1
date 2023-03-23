import React from "react";

function DescriptionPanel(props) {
    console.log(props)
    return (
        <div className="div__presentation">
                <h2>{props.title}</h2>
                <div>
                    <div className="flex__presentation">
                        <div className="p__presentation">
                            <p>{props.description}</p>
                        </div>
                        <div className="divImg__presentation">
                            <img src={props.imgUrl} alt="" className="img__presentation"/>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default DescriptionPanel;