const express = require('express');
const router = express.Router();
const fishCtrl = require('../controllers/fish');
const { authorization } = require('../middleware/authAdmin')

router.get('/', fishCtrl.getAllFishes);
router.get('/:id', fishCtrl.getOneFish);
router.post('/', authorization, fishCtrl.createOneFish);
router.put('/:id', authorization, fishCtrl.updateOneFish);
router.delete('/:id', authorization, fishCtrl.deleteOneFish);


module.exports = router;
