import React, {useState, useEffect} from "react";

function Cart({ cart, updateCart, articles }) {
    const [isOpen, setIsOpen] = useState(true);
	const total = cart.reduce((acc, article) => {
		return acc + article.amount * article.price, 0
	});

	useEffect(() => {
		document.title = `Total: ${total}€ d'achats`
	}, [total]);

	return isOpen ? (
        <div>
            <button onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>

                    <ul>
                        {articles.map((article, index) => (
                            <div key={index}>
                                <img src={article.picture} alt="" />
                                <div>
                                    <h3>{article.name}</h3>
                                    <p>{article.price*article.count}€</p>
                                </div>
                            </div>
                        ))}                       
                    </ul>

                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Ouvrir le Panier
            </button>
        </div>
    )
};

export default Cart;