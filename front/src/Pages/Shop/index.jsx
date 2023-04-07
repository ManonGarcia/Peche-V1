import React, {useState, useEffect} from "react";
import ShopBanner from "../../componants/Banner/shopBanner";
import ArticleOfMyShop from "../../componants/CardOfMyShop/ArticleOfMyShop";
import Cart from "../Cart";

function Shopping() {
    const [articles, setArticles] = useState([]);
    const [cart, updateCart] = useState([JSON.parse(localStorage.getItem("shopping-cart"))]);
    
    useEffect(() => localStorage.setItem("shopping-cart", JSON.stringify(cart)), [cart]);
    useEffect(fetchMyShopArticles, []);

    function fetchMyShopArticles() {
        fetch('http://localhost:3001/myShop')
            .then((res) => res.json())
            .then((res) => setArticles(res))
            .catch(console.error);
    };

    function addToCart(article) {
        const id = article.id
		const currentArticleSaved = cart.find((article) => article.id === id)
        if (currentArticleSaved) {
			const cartFilteredCurrentArticle = cart.filter(
				(article) => article.id !== id
			)
			updateCart([
				...cartFilteredCurrentArticle,
				{ article, amount: currentArticleSaved.amount + 1 }
			])
		} else {
			updateCart({...article, amount: 1 })
		}
	};


    return (
        <div className="myShop">
            <ShopBanner/>
            <div className="myShop__flex__cart">
                <div className="grid__myShop">
                    {articles.map((article, key) => (
                        <div className="card__myShop" key={key}>
                            <ArticleOfMyShop article={article} />
                            <div className="card__mySop__btn">
                                <button className="btn__addToCart" onClick={() => addToCart({article})}>
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Cart cart={cart} updateCart={updateCart} articles={articles} />
            </div>
        </div>
    );
};

export default Shopping;