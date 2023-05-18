const express = require('express');
const router = express.Router();
const ruleCtrl = require('../controllers/rule');
const { authorization, isAdmin } = require('../middleware/authAdmin')

router.get('/', authorization, ruleCtrl.getAllRules);
router.get('/:id', authorization, ruleCtrl.getOneRule);
router.post('/', authorization, isAdmin, ruleCtrl.createOneRule);
router.put('/:id', authorization, isAdmin, ruleCtrl.updateOneRule);
router.delete('/:id', authorization, isAdmin, ruleCtrl.deleteOneRule);

module.exports = router;
