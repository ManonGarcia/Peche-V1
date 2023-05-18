const express = require('express');
const router = express.Router();
const checklistCtrl = require('../controllers/checklist');
const { authorization, isAdmin } = require('../middleware/authAdmin')

router.get('/', authorization, checklistCtrl.getAllChecklists);
router.get('/:id', authorization, checklistCtrl.getOneChecklist);
router.post('/', authorization, isAdmin, checklistCtrl.createOneChecklist);
router.put('/:id', authorization, isAdmin, checklistCtrl.updateOneChecklist);
router.delete('/:id', authorization, isAdmin, checklistCtrl.deleteOneChecklist);


module.exports = router;