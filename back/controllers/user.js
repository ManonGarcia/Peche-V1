const User = require('../models/user');

function adminLogin(req, res) {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({message: 'Erreur identifiant ou mot de passe'})
    }
    
    User.findOne({where: {username: username, password: password}, raw: true})
        .then(user => {
            if (!user) {
                throw new Error("user not exist")
            }

            return res.status(200).json(user);
        })
        .catch(
            function (err) {
                console.log("err")
                return res.status(500).json({message: err.message});
            }
        )
}


module.exports = {adminLogin};
