const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/admin');


function adminLogin(req, res) {
    const { username, password } = req.body;
    console.log(req.body);

    if(!username || !password){
        return res.status(400).json({message: 'Erreur identifiant ou mot de passe'})
    };
    console.log(username, password)
    User.findOne({where: {username: username, password: password}, raw: true})
        .then(user => {
            if (user === null) {
                return res.status(403).json({message: 'Paire identifiant/mot de passe incorrecte'});
            } else {
                const jwtToken = process.env.JWT_SECRET;
                const token = jwt.sign({username: user.username}, jwtToken, {expiresIn: '24h'});
                return res.json({access_token: token});
                // bcrypt.compare(password, user.password)
                //     .then(passwordValid => {
                //         if (!passwordValid) {
                //             return res.status(401).json({ message: 'Mot de passe incorrect !'});
                //         } else {
                //             const jwtToken = process.env.JWT_SECRET;
                //             const token = jwt.sign({username: user.username}, jwtToken, {expiresIn: '24h'});
                            
                //             return res.json({access_token: token})                                    
                //         }
                //     })
                //     .catch(err => res.status(500).json({message: 'Connexion échouée'}))
            }
        })
        .catch(
            function (err) {
                console.log(err)
                return res.status(500).json({message: 'Erreur base de données'});
            }
        )
}

module.exports = {adminLogin};