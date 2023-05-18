const { Material } = require('../models');
const { materialValidation } = require('../validation/productValidation');

function getAllMaterials (req, res) {
    Material.findAll()
    .then(materials => res.status(200).json(materials))
    .catch(err => res.status(500).json(err))
};

function getOneMaterial (req, res) {
    const { id } = req.params
    Material.findByPk(id)
    .then(material => {
        if(!material) return res.status(404).json({ message: 'Introuvable !'})
        res.status(200).json(material)
    })
    .catch(err => res.status(500).json(err))
};

function createOneMaterial (req, res) {
    const { body } = req

    const { error } = materialValidation(body);
    if(error) return res.status(401).json(error.details[0].message);

    Material.create({ ...body })
    .then(() => {
        res.status(201).json({ message: 'Matériel créé !'})
    })
    .catch(err => res.status(500).json(err))
};

function updateOneMaterial (req, res) {
    const { id } = req.params
    const { body } = req

    Material.findByPk(id)
    .then(material => {
        if(!material) return res.status(404).json({ message: 'Introuvable !'})
        material.name = body.name
        material.save()
        .then(() => res.status(200).json({ message: 'Matériel mis à jour'}))
        .catch((err) => res.status(500).json(err))
    })
    .catch((err) => res.status(500).json(err))
};

function deleteOneMaterial (req, res) {
    const { id } = req.params

    Material.destroy({ where: { id: id } })
    .then(material => {
        if(material === 0) return res.status(404).json({ message: 'Non trouvé !' })
        res.status(200).json({ message: 'Matériel supprimé !' })
    })
    .catch((err) => res.status(500).json(err))
};


module.exports = { getAllMaterials, getOneMaterial, createOneMaterial, updateOneMaterial, deleteOneMaterial };
