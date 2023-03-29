import React, { useState, useEffect } from "react";
import ItemForSale from "../../componants/CardShopping/itemForSale";

function CardShopping() {
    const [articles, setArticles] = useState([]);
    useEffect(() => fetchShoppingList, []);

    function fetchShoppingList() {
        fetch('http://localhost:3001/shopping')
            .then((res) => res.json())
            .then((res) => setArticles(res))
            .catch(console.error);
    };

    return (
        <div className="shopping">
            <div className="banner__shopping">
                <div className="sale__title">
                    <h1 className="sale__title__1">C'est</h1>
                    <h1 className="sale__title__2">les</h1>
                    <h1 className="sale__title__3">soldes</h1>
                </div>
                <h1 className="sale__title__4">!!</h1>
            </div>
            <div className="grid__shopping">
                {articles.map((article, key)=> <ItemForSale key={key} brand={article.brand} imgUrl={article.picture} name={article.name} shop={article.shop} price={article.price} />)}
            </div>
        </div>
    )
};

export default CardShopping;