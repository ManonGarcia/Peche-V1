const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userValidation } = require('../validation/userValidation');

async function adminSignup (req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({message: 'Erreur identifiant ou mot de passe'})
        };
        const { error } = userValidation(req.body);
        if(error) return res.status(401).json(error.details[0].message);

        const hash = await hashPassword(password);

        const newUser = new User({ username, password: hash });
        newUser.save()
        .then(() => res.status(201).json({ message: 'Nouvel utilisateur enregistré !'}))
        .catch(() => res.status(403).json({ message: 'Requête impossible, utilisateur déjà enregistré !' }));
    } catch (error) { res.status(401).json({ error }); }
};

function hashPassword (password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};



async function adminLogin(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({message: 'Erreur identifiant / mot de passe manquant !'})
    };
    
    const user = await User.findOne({where: {username: username}, raw: true});
    if(user === null) {
        res.status(404).json({ message: 'Utilisateur non trouvé. Erreur identifiant/mot de passe !' });
    } else {
        const passwordValid = await bcrypt.compare(password, user.password);
            if (!passwordValid) {
                res.status(401).json({ message: 'Mot de passe incorrect !'});
            } else {
                const token = createToken(user);
                res.status(200).send({userId: user.id, token: token});
            }
    }
};

function createToken(user) {
    const jwtToken = process.env.JWT_SECRET;
    const token = jwt.sign({userId: user.id}, jwtToken, {expiresIn: '24h'});
    return token
};


module.exports = { adminSignup, adminLogin };
