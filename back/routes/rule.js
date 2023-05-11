const express = require('express');
const router = express.Router();
const ruleCtrl = require('../controllers/rule');

router.get('/', ruleCtrl.getAllRules);
router.get('/:id', ruleCtrl.getOneRule);
router.post('/', ruleCtrl.createOneRule);
router.put('/:id', ruleCtrl.updateOneRule);
router.delete('/:id', ruleCtrl.deleteOneRule);

module.exports = router;
