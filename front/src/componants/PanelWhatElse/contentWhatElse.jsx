import React from "react";

function WhatElseContent(props) {
    return (
            <div className="item__sommaire">
                <h3>{props.title}</h3>
                <img src={props.imgUrl} alt="" className="img__sommaire"/>
                <p>{props.description}</p>
            </div>
    )
};

export default WhatElseContent;