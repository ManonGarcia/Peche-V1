import React from "react";

function TitleArticle(props) {
    return (
            <div className="article__header">
                <h1>{props.article.name}</h1>
                <div className="article__header__flex">
                    <div>
                        <h2>Description</h2>
                        <p>{props.article.description}</p>
                    </div>
                    <div>
                        <h3>Prix</h3>
                        <p>{props.article.price}</p>

                        <h3>Livraison</h3>
                        <p>{props.article.delivery}</p>

                        <div className="myShop__bg__btn">                            
                            <button>Ajouter au panier</button>
                        </div>

                    </div>
                </div>
            </div>
    )
};


export default TitleArticle;