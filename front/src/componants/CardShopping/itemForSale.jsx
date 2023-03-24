import React from "react";

function ItemForSale(props) {
    return (
        <div className="card__shopping">
            <img src={props.imgUrl} alt="" />
            <div className="card__shopping__text">
                <h3 className="card__shopping__brand">{props.brand}</h3>
                <h4>{props.name}</h4>
                <p>{props.shop} : {props.price}</p>
            </div>
        </div>
    )
};

export default ItemForSale;