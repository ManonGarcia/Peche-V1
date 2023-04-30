const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
//     try {
        const token = req.headers.authorization.split(' ')[1];      // Extraire le token du header Authorization
//         const decodedToken = jwt.verify(token, process.env.JWT_PASSWORD);       // Décoder le token avec 'verify'
//         const userId = decodedToken.userId;     // Extraire l'Id utilisateur du token
//         req.auth = {
//                 userId: userId      // Le rajouter à l’objet Request pour pouvoir l'exploiter depuis chaque route
//         };
//     next();
//     } catch(error) {
//         res.status(401).send({ error });
//     }
};


module.exports = {authorization};