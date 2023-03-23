import React from "react";

function ItemForSale(props) {
    return (
        <div className="card__shopping">
            <img src={props.imgUrl} alt="" />
            <div className="card__shopping__text">
                <p className="card__shopping__brand">{props.brand}</p>
                <h3>{props.name}</h3>
                <p>{props.shop} : {props.price}</p>
            </div>
        </div>
    )
};

export default ItemForSale;