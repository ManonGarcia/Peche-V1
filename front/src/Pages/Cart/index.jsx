import React, {useState, useEffect} from "react";

function Cart({ cart, updateCart, article }) {
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, articleType) => acc + articleType.amount*articleType.price, 
        0
    );

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
                        {/* {cart.map((name, picture, price, amount, index) => (
                            <div key={index}>
                                <img src={picture} alt="" />
                                <div>
                                    <h3>{name}</h3>
                                    <p>{price}€ x {amount}</p>
                                </div>
                            </div>
                        ))}     */}
                        
                        {cart.map(({ name, price, amount, index}) => (
                            <div key={`${name}-${index}`}>
                                    {name} {price}€ x {amount}
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