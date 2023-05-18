const express = require('express');
const router = express.Router();
const spotCtrl = require('../controllers/spot');
const { authorization, isAdmin } = require('../middleware/authAdmin')

router.get('/', authorization, spotCtrl.getAllSpots);
router.get('/:id', authorization, spotCtrl.getOneSpot);
router.post('/', authorization, isAdmin, spotCtrl.createOneSpot);
router.put('/:id', authorization, isAdmin, spotCtrl.updateOneSpot);
router.delete('/:id', authorization, isAdmin, spotCtrl.deleteOneSpot);


module.exports = router;
