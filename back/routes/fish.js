const express = require('express');
const router = express.Router();
const fishCtrl = require('../controllers/fish');

router.get('/', fishCtrl.getAllFishes);
router.get('/:id', fishCtrl.getOneFish);
router.post('/', fishCtrl.createOneFish);
router.put('/:id', fishCtrl.updateOneFish);
router.delete('/:id', fishCtrl.deleteOneFish);


module.exports = router;
