const { Spot, Fish, Rule } = require('../models');
const { spotValidation } = require('../validation/productValidation');

function getAllSpots (req, res) {
    Spot.findAll({
        include: [
            { model: Fish, as: 'fishes' },
            { model: Rule, as: 'rules' }
        ],
    })
    .then(spots => res.status(200).json(spots))
    .catch(err => res.status(500).json(err))
};

function getOneSpot (req, res) {
    const { id } = req.params
    Spot.findByPk(id, {
        include: [
            { model: Fish, as: 'fishes' },
            { model: Rule, as: 'rules' }
        ],
    })
    .then(spot => {
        if(!spot) return res.status(404).json({ message: 'Introuvable !'})
        res.status(200).json(spot)
    })
    .catch(err => res.status(500).json(err))
};

function createOneSpot (req, res) {
    const { body } = req

    const { error } = spotValidation(body);
    if(error) return res.status(401).json(error.details[0].message);

    Spot.create({ ...body })
    .then(() => {
        res.status(201).json({ message: 'Spot créée !'})
    })
    .catch(err => res.status(500).json(err))
};

function updateOneSpot (req, res) {
    const { id } = req.params
    const { body } = req

    Spot.findByPk(id)
    .then(spot => {
        if(!spot) return res.status(404).json({ message: 'Introuvable !'})
        spot.set({...body})
        spot.save()
        .then(() => res.status(200).json({ message: 'Spot mis à jour'}))
        .catch((err) => res.status(500).json(err))
    })
    .catch((err) => res.status(500).json(err))
};

function deleteOneSpot (req, res) {
    const { id } = req.params

    Spot.destroy({ where: { id: id } })
    .then(spot => {
        if(spot === 0) return res.status(404).json({ message: 'Non trouvé !' })
        res.status(200).json({ message: 'Spot supprimé !' })
    })
    .catch((err) => res.status(500).json(err))
};


module.exports = { getAllSpots, getOneSpot, createOneSpot, updateOneSpot, deleteOneSpot };
