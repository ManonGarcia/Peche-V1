import React from "react";
import { Link } from "react-router-dom";

function ArticleOfMyShop(props) {
    return (
        <Link to={`/boutique/${props.id}`} state={{articleId: props.id}}>
            <div className="card__myShop__article">
                <img src={props.picture} alt="" />
                <div className="card__myShop__text">
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                </div>
            </div>
        </Link>
    )
};

export default ArticleOfMyShop;