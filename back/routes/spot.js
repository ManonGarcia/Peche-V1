const express = require('express');
const router = express.Router();
const spotCtrl = require('../controllers/spot');

router.get('/', spotCtrl.getAllSpots);
router.get('/:id', spotCtrl.getOneSpot);
router.post('/', spotCtrl.createOneSpot);
router.put('/:id', spotCtrl.updateOneSpot);
router.delete('/:id', spotCtrl.deleteOneSpot);


module.exports = router;