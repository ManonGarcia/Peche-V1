const express = require('express');
const router = express.Router();
const fishCtrl = require('../controllers/fish');

router.get('/getAll', fishCtrl.getAllFishes);
router.get('/getOne/:id', fishCtrl.getOneFish);
router.post('/createOne', fishCtrl.createOneFish);
router.put('/updateOne/:id', fishCtrl.updateOneFish);
router.delete('/deleteOne/:id', fishCtrl.deleteOneFish);


module.exports = router;
