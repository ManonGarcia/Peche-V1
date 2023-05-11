const express = require('express');
const router = express.Router();
const materialCtrl = require('../controllers/material');

router.get('/', materialCtrl.getAllMaterials);
router.get('/:id', materialCtrl.getOneMaterial);
router.post('/', materialCtrl.createOneMaterial);
router.put('/:id', materialCtrl.updateOneMaterial);
router.delete('/:id', materialCtrl.deleteOneMaterial);


module.exports = router;
