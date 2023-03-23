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
                <h1>C'est les soldes !!</h1>
            </div>
            <div className="grid__shopping">
                {articles.map((article, key)=> <ItemForSale key={key} brand={article.brand} imgUrl={article.picture} name={article.name} shop={article.shop} price={article.price} />)}
            </div>
        </div>
    )
};

export default CardShopping;