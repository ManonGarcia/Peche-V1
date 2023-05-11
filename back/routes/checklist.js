const express = require('express');
const router = express.Router();
const checklistCtrl = require('../controllers/checklist');

router.get('/', checklistCtrl.getAllChecklists);
router.get('/:id', checklistCtrl.getOneChecklist);
router.post('/', checklistCtrl.createOneChecklist);
router.put('/:id', checklistCtrl.updateOneChecklist);
router.delete('/:id', checklistCtrl.deleteOneChecklist);


module.exports = router;