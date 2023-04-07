import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../../Pages/Cart";

function ArticleId() {
    const { id } = useParams();
    const [articles, setArticles] = useState(null);
    useEffect(fetchDataArticle, []);

    function fetchDataArticle() {
        fetch('http://localhost:3001/myShop')
            .then((res) => res.json())
            .then((articles) => {
                const article = articles.find((article) => article.id === id);
                setArticles(article);
            })
            .catch(console.error);
    }

    if(articles === null) return (
        <div className="spinner">
            <div></div><div></div><div></div><div></div><div></div>
        </div>
    );

    return (
        <div className="spotsId">
            <div className="img__spotId">
                <img src={articles.picture} alt="" />
            </div>

            <div className="article__header">
                <h1>{articles.name}</h1>
                <div className="article__header__flex">
                    <div>
                        <h2>Description</h2>
                        <p>{articles.description}</p>
                    </div>
                    <div>
                        <h3>Prix</h3>
                        <p>{articles.price}</p>

                        <h3>Livraison</h3>
                        <p>{articles.delivery}</p>

                        <div className="myShop__bg__btn">                            
                            <button className="btn" >Ajouter au panier</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ArticleId;