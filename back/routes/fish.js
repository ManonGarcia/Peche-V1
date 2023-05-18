const express = require('express');
const router = express.Router();
const fishCtrl = require('../controllers/fish');
const { authorization, isAdmin } = require('../middleware/authAdmin')

router.get('/', authorization, fishCtrl.getAllFishes);
router.get('/:id', authorization, fishCtrl.getOneFish);
router.post('/', authorization, isAdmin, fishCtrl.createOneFish);
router.put('/:id', authorization, isAdmin, fishCtrl.updateOneFish);
router.delete('/:id', authorization, isAdmin, fishCtrl.deleteOneFish);


module.exports = router;
