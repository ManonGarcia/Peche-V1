import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bloc__footer">
            <h4>La Pêche, un sport, un passe-temps, une passion.</h4>
            <div className="liens__footer">
                <Link>Booki.com</Link>
                <Link>Ohmyfood.com</Link>
                <Link>LaPanthère.com</Link>
            </div>
        </div>
    )
};

export default Footer;