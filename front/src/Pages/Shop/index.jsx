import React, {useState, useEffect} from "react";
import ShopBanner from "../../componants/Banner/shopBanner";
import ArticleOfMyShop from "../../componants/CardOfMyShop/ArticleOfMyShop";
import Cart from "../Cart";

function Shopping() {
    const [articles, setArticles] = useState([]);
    // const [cart, updateCart] = useState([JSON.parse(localStorage.getItem("shopping-cart"))]);
    const [cart, updateCart] = useState([]);

    
    // useEffect(() => localStorage.setItem("shopping-cart", JSON.stringify(cart)), [cart]);
    useEffect(fetchMyShopArticles, []);

    function fetchMyShopArticles() {
        fetch('http://localhost:3001/myArticles')
            .then((res) => res.json())
            .then((res) => setArticles(res))
            .catch(console.error);
    };

    // function addToCart(article) {
    //     const id = article.id
	// 	const currentArticleSaved = cart.find((article) => article.id === id)
    //     if (currentArticleSaved) {
	// 		const cartFilteredCurrentArticle = cart.filter(
	// 			(article) => article.id !== id
	// 		)
	// 		updateCart([
	// 			...cartFilteredCurrentArticle,
	// 			{ article, amount: currentArticleSaved.amount + 1 }
	// 		])
	// 	} else {
	// 		updateCart({...article, amount: 1 })
	// 	}
	// };

    function addToCart(name, price) {
		const currentArticleSaved = cart.find((article) => article.name === name)
		if (currentArticleSaved) {
			const cartFilteredCurrentArticle = cart.filter(
				(article) => article.name !== name
			)
			updateCart([
				...cartFilteredCurrentArticle,
				{ name, price, amount: currentArticleSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}


    return (
        <div className="myShop">
            <ShopBanner/>

            <div className="myShop__flex__cart">
                <div className="grid__myShop">
                    {articles.map(({ id, picture, name, price, index }) => (
                        <div className="card__myShop" >
                            <ArticleOfMyShop key={index} id={id} picture={picture} name={name} price={price} />
                            <div className="card__mySop__btn">
                                <button className="btn__addToCart" onClick={() => addToCart({name, price})}>
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Cart cart={cart} updateCart={updateCart} />
            </div>
        </div>
    );
};

export default Shopping;