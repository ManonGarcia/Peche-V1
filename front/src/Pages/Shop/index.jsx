import React, {useState, useEffect} from "react";
import ShopBanner from "../../componants/Banner/shopBanner";
import ArticleOfMyShop from "../../componants/CardOfMyShop/ArticleOfMyShop";

function Shopping() {
    const [articles, setArticles] = useState([]);
    useEffect(fetchMyShopArticles, []);

    function fetchMyShopArticles() {
        fetch('http://localhost:3001/myShop')
            .then((res) => res.json())
            .then((res) => setArticles(res))
            .catch(console.error);
    };
    

    return (
        <div className="myShop">
            <ShopBanner/>
            <div className="myShop__flex__cart">
                <div className="grid__myShop">
                    {articles.map((article, key) => (
                        <div className="card__myShop">
                            <ArticleOfMyShop key={key} article={article} id={article.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Shopping;