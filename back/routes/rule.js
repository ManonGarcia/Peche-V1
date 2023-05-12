const express = require('express');
const router = express.Router();
const ruleCtrl = require('../controllers/rule');
const { authorization } = require('../middleware/authAdmin')

router.get('/', ruleCtrl.getAllRules);
router.get('/:id', ruleCtrl.getOneRule);
router.post('/', authorization, ruleCtrl.createOneRule);
router.put('/:id', authorization, ruleCtrl.updateOneRule);
router.delete('/:id', authorization, ruleCtrl.deleteOneRule);

module.exports = router;
