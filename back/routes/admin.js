const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/admin');


router.post('/login', (req, res) => {
        const { username, password } = req.body;

        if(!username || !password){
            return res.status(400).json({message: 'Erreur identifiant ou mot de passe'})
        }

        User.findOne({where: {username: username}, raw: true})      
            .then(user => {
                if (user === null) {
                    return res.status(403).json({message: 'Paire identifiant/mot de passe incorrecte'});
                } else {
                    // Comparer le mot de passe entré avec le hash enregistré dans la base de données avec 'bcrypt'
                    bcrypt.compare(password, user.password)
                        .then(passwordValid => {
                            if (!passwordValid) {
                                return res.status(401).json({ message: 'Mot de passe incorrect !'});
                            } else {
                                const jwtToken = process.env.JWT_SECRET;
                                const token = jwt.sign({username: user.username}, jwtToken, {expiresIn: '24h'});   // Utiliser 'jwt.sign' pour chiffrer un token
                                
                                return res.json({access_token: token})                                    
                            }
                        })
                        .catch(err => res.status(500).json({message: 'Connexion échouée'}))
                }
            })
            .catch(err => res.status(500).json({message: 'Erreur base de données'}))  
    },
)

module.exports = router;