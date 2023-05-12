const { Fish } = require('../models');

function getAllFishes (req, res) {
    Fish.findAll()
    .then(fishes => res.status(200).json(fishes))
    .catch(err => res.status(500).json(err))
};

function getOneFish (req, res) {
    const { id } = req.params
    Fish.findByPk(id)
    .then(fish => {
        if(!fish) return res.status(404).json({ message: 'Introuvable !'})
        res.status(200).json(fish)
    })
    .catch(err => res.status(500).json(err))
};

function createOneFish (req, res) {
    const { body } = req
    console.log(body)

    Fish.create({ ...body })
    .then(() => {
        res.status(201).json({ message: 'Poisson créé !'})
    })
    .catch(err => res.status(500).json(err))
};

function updateOneFish (req, res) {
    const { id } = req.params
    const { body } = req

    Fish.findByPk(id)
    .then(fish => {
        if(!fish) return res.status(404).json({ message: 'Introuvable !'})
        fish.name = body.name
        fish.save()
        .then(() => res.status(200).json({ message: 'Poisson mis à jour'}))
        .catch((err) => res.status(500).json(err))
    })
    .catch((err) => res.status(500).json(err))
};

function deleteOneFish (req, res) {
    const { id } = req.params

    Fish.destroy({ where: { id: id } })
    .then(fish => {
        if(fish === 0) return res.status(404).json({ message: 'Non trouvé !' })
        res.status(200).json({ message: 'Poisson supprimé !' })
    })
    .catch((err) => res.status(500).json(err))
};


module.exports = { getAllFishes, getOneFish, createOneFish, updateOneFish, deleteOneFish };
