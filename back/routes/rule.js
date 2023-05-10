const express = require('express');
const router = express.Router();
const ruleCtrl = require('../controllers/rule');

router.get('/getAll', ruleCtrl.getAllRules);
router.get('/getOne/:id', ruleCtrl.getOneRule);
router.post('/createOne', ruleCtrl.createOneRule);
router.put('/updateOne/:id', ruleCtrl.updateOneRule);
router.delete('/deleteOne/:id', ruleCtrl.deleteOneRule);

module.exports = router;
