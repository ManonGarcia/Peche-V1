const express = require('express');
const router = express.Router();
const spotCtrl = require('../controllers/spot');

router.get('/getAll', spotCtrl.getAllSpots);
router.get('/getOne/:id', spotCtrl.getOneSpot);
router.post('/createOne', spotCtrl.createOneSpot);
router.put('/updateOne/:id', spotCtrl.updateOneSpot);
router.delete('/deleteOne/:id', spotCtrl.deleteOneSpot);


module.exports = router;