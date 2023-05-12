const express = require('express');
const router = express.Router();
const materialCtrl = require('../controllers/material');
const { authorization } = require('../middleware/authAdmin')

router.get('/', materialCtrl.getAllMaterials);
router.get('/:id', materialCtrl.getOneMaterial);
router.post('/', authorization, materialCtrl.createOneMaterial);
router.put('/:id', authorization, materialCtrl.updateOneMaterial);
router.delete('/:id', authorization, materialCtrl.deleteOneMaterial);


module.exports = router;
