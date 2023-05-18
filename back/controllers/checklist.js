const { Checklist, Material } = require('../models');
const { checklistValidation } = require('../validation/productValidation');


function getAllChecklists (req, res) {
    Checklist.findAll({
        include: [{
            model: Material,
            as: 'materials'
        }],
    })
    .then(checklists => res.status(200).json(checklists))
    .catch(err => res.status(500).json(err))
};

function getOneChecklist (req, res) {
    const { id } = req.params
    Checklist.findByPk(id, {
        include: [{
                model: Material,
                as: 'materials'
        }],
    })
    .then(checklist => {
        if(!checklist) return res.status(404).json({ message: 'Introuvable !'})
        res.status(200).json(checklist)
    })
    .catch(err => res.status(500).json(err))
};

function createOneChecklist (req, res) {
    const { body } = req

    const { error } = checklistValidation(body);
    if(error) return res.status(401).json(error.details[0].message);

    Checklist.create({ ...body })
    .then(() => {
        res.status(201).json({ message: 'Checklist créée !'})
    })
    .catch(err => res.status(500).json(err))
};

function updateOneChecklist (req, res) {
    const { id } = req.params
    const { body } = req

    Checklist.findByPk(id)
    .then(checklist => {
        if(!checklist) return res.status(404).json({ message: 'Introuvable !'})
        checklist.set({...body})
        checklist.save()
        .then(() => res.status(200).json({ message: 'Checklist mise à jour'}))
        .catch((err) => res.status(500).json(err))
    })
    .catch((err) => res.status(500).json(err))
};

function deleteOneChecklist (req, res) {
    const { id } = req.params

    Checklist.destroy({ where: { id: id } })
    .then(checklist => {
        if(checklist === 0) return res.status(404).json({ message: 'Non trouvée !' })
        res.status(200).json({ message: 'Checklist supprimée !' })
    })
    .catch((err) => res.status(500).json(err))
};


module.exports = { getAllChecklists, getOneChecklist, createOneChecklist, updateOneChecklist, deleteOneChecklist };
