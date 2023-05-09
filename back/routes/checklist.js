const express = require('express');
const router = express.Router();
const checklistCtrl = require('../controllers/checklist');

router.get('/getAll', checklistCtrl.getAll);
router.get('/getOne/:id', checklistCtrl.getOne);
router.post('/createOne', checklistCtrl.createOne);
router.put('/updateOne/:id', checklistCtrl.updateOne);
router.delete('/deleteOne/:id', checklistCtrl.deleteOne);

router.get('/materials', checklistCtrl.getMaterials)



module.exports = router;