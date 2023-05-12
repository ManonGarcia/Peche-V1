const { Rule } = require('../models');

function getAllRules (req, res) {
    Rule.findAll()
    .then(rules => res.status(200).json(rules))
    .catch(err => res.status(500).json(err))
};

function getOneRule (req, res) {
    const { id } = req.params
    Rule.findByPk(id)
    .then(rule => {
        if(!rule) return res.status(404).json({ message: 'Introuvable !'})
        res.status(200).json(rule)
    })
    .catch(err => res.status(500).json(err))
};

function createOneRule (req, res) {
    const { body } = req
    console.log(body)

    Rule.create({ ...body })
    .then(() => {
        res.status(201).json({ message: 'Règle créée !'})
    })
    .catch(err => res.status(500).json(err))
};

function updateOneRule (req, res) {
    const { id } = req.params
    const { body } = req

    Rule.findByPk(id)
    .then(rule => {
        if(!rule) return res.status(404).json({ message: 'Introuvable !'})
        rule.content = body.content
        rule.save()
        .then(() => res.status(200).json({ message: 'Règle mise à jour'}))
        .catch((err) => res.status(500).json(err))
    })
    .catch((err) => res.status(500).json(err))
};

function deleteOneRule (req, res) {
    const { id } = req.params

    Rule.destroy({ where: { id: id } })
    .then(rule => {
        if(rule === 0) return res.status(404).json({ message: 'Non trouvée !' })
        res.status(200).json({ message: 'Règle supprimée !' })
    })
    .catch((err) => res.status(500).json(err))
};


module.exports = { getAllRules, getOneRule, createOneRule, updateOneRule, deleteOneRule };
