const express = require('express');
const router = express.Router();
const checklistCtrl = require('../controllers/checklist');
const { authorization, isAdmin } = require('../middleware/authAdmin')

router.get('/', checklistCtrl.getAllChecklists);
router.get('/:id', checklistCtrl.getOneChecklist);
router.post('/', authorization, isAdmin, checklistCtrl.createOneChecklist);
router.put('/:id', authorization, isAdmin, checklistCtrl.updateOneChecklist);
router.delete('/:id', authorization, isAdmin, checklistCtrl.deleteOneChecklist);


module.exports = router;