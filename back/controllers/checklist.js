const { Checklist, Material } = require('../models');

function getAll(req, res) {
    Checklist.findAll({
        include: [{
            model: Material,
            as: 'materials'
        }]
    })
    .then((checklists) => {
        res.status(200).json(checklists)
    })
    .catch(err => { console.log(err); res.status(500).json(err)})
};

function getMaterials(req, res) {
    Material.findAll()
    .then((checklists) => {
        res.status(200).json(checklists)
    })
    .catch(err => { console.log(err); res.status(500).json(err)})
};

function getOne(req, res) {
    const { id } = req.params
    Checklist.findByPk(id)
    .then(checklist => {
        if(!checklist) return res.status(404).json({ message: 'Introuvable !'})
        res.status(200).json(checklist)
    })
    .catch(err => res.status(500).json(err))
};

function createOne(req, res) {
    const { body } = req
    Checklist.create({ ...body })
    .then(() => {
        res.status(201).json({ message: 'Checklist créée !'})
    })
    .catch(err => res.status(500).json(err))
};

function updateOne(req, res) {

};

function deleteOne(req, res) {

};


module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getMaterials };
