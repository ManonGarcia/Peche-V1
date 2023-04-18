const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Connexion utilisateur
async function userLogin (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({email: email});        
    // Vérifier que l'e-mail entré correspond à un e-mail de la base de données
    if (user === null) {
        res.status(403).json({message: 'Paire identifiant/mot de passe incorrecte'});
    } else {
        // Comparer le mot de passe entré avec le hash enregistré dans la base de données avec 'bcrypt'
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            res.status(401).json({ message: 'Mot de passe incorrect !'});
        } else {
        // Chiffrer un token
            const token = createToken(user);
        // Renvoi d'une réponse contenant l'Id utilisateur et un token
            res.status(200).send({userId: user._id, token: token});
        }
    }
};

// Chiffrer un nouveau token
function createToken(user) {
const jwtToken = process.env.JWT_PASSWORD;
const token = jwt.sign({userId: user._id}, jwtToken, {expiresIn: '24h'});   // Utiliser 'jwt.sign' pour chiffrer un token
return token
};


module.exports = {userLogin};