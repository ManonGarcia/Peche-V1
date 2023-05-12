const express = require('express');
const router = express.Router();
const checklistCtrl = require('../controllers/checklist');
const { authorization } = require('../middleware/authAdmin')

router.get('/', checklistCtrl.getAllChecklists);
router.get('/:id', checklistCtrl.getOneChecklist);
router.post('/', authorization, checklistCtrl.createOneChecklist);
router.put('/:id', authorization, checklistCtrl.updateOneChecklist);
router.delete('/:id', authorization, checklistCtrl.deleteOneChecklist);


module.exports = router;