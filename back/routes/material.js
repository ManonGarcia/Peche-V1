const express = require('express');
const router = express.Router();
const materialCtrl = require('../controllers/material');
const { authorization, isAdmin } = require('../middleware/authAdmin')

router.get('/', authorization, materialCtrl.getAllMaterials);
router.get('/:id', authorization, materialCtrl.getOneMaterial);
router.post('/', authorization, isAdmin, materialCtrl.createOneMaterial);
router.put('/:id', authorization, isAdmin, materialCtrl.updateOneMaterial);
router.delete('/:id', authorization, isAdmin, materialCtrl.deleteOneMaterial);


module.exports = router;
