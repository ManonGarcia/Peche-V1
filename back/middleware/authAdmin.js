const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

function authorization(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = User.findByPk(decodedToken.userId, { include: "role"});
        console.log(user.role)
        req.auth = {
                user: user
        };
        next();
    } catch(error) {
        res.status(401).send({ error });
    }
};


module.exports = {authorization}; 