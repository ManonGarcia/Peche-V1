const express = require('express');
const router = express.Router();
const spotCtrl = require('../controllers/spot');
const { authorization } = require('../middleware/authAdmin')

router.get('/', spotCtrl.getAllSpots);
router.get('/:id', spotCtrl.getOneSpot);
router.post('/', authorization, spotCtrl.createOneSpot);
router.put('/:id', authorization, spotCtrl.updateOneSpot);
router.delete('/:id', authorization, spotCtrl.deleteOneSpot);


module.exports = router;
