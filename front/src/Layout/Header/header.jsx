import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.jpg";

export function Header() {
    return (
        <div className="header__bloc">
            <div className="header__titre">
                <img src={ LOGO } alt="Logo" className="header__logo"/>
                <h1>La Pêche, un sport, un passe-temps, une passion.</h1>
            </div>

            <nav className="header__nav">
                <NavLink to="/">
                    <p>Accueil</p>
                </NavLink>

                <NavLink to="/coins-sympas">
                    <p>Coins sympas</p>
                </NavLink>

                <NavLink to="/checklists">
                    <p>Checklists</p>
                </NavLink>
                
                <NavLink to="/articles-vedettes">
                    <p>Articles vedettes</p>
                </NavLink>

                <NavLink to="/boutique">
                    <p>Boutique</p>
                </NavLink>

                <NavLink to="/contact">
                    <p>Contact</p>
                </NavLink>

                <NavLink to="/cart" className="cart__icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
            </nav>
        </div>
    )
};