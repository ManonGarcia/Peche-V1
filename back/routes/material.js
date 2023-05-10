const express = require('express');
const router = express.Router();
const materialCtrl = require('../controllers/material');

router.get('/getAll', materialCtrl.getAllMaterials);
router.get('/getOne/:id', materialCtrl.getOneMaterial);
router.post('/createOne', materialCtrl.createOneMaterial);
router.put('/updateOne/:id', materialCtrl.updateOneMaterial);
router.delete('/deleteOne/:id', materialCtrl.deleteOneMaterial);


module.exports = router;
