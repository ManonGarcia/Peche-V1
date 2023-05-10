const express = require('express');
const router = express.Router();
const checklistCtrl = require('../controllers/checklist');

router.get('/getAll', checklistCtrl.getAllChecklists);
router.get('/getOne/:id', checklistCtrl.getOneChecklist);
router.post('/createOne', checklistCtrl.createOneChecklist);
router.put('/updateOne/:id', checklistCtrl.updateOneChecklist);
router.delete('/deleteOne/:id', checklistCtrl.deleteOneChecklist);


module.exports = router;