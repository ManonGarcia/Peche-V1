const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

async function authorization(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decodedToken.userId, { include: "role" });
        req.auth = {
                username: user.username,
                id: user.id,
                role: user.role.role
        };
        next();
    } catch(error) {
        res.status(401).send({ error });
    }
};

function isAdmin(req, res, next) {
    console.log(req.auth)
    if(req.auth.role !== 'admin') {
        return res.status(401).send()
    }
    next()
};

module.exports = {authorization, isAdmin}; 