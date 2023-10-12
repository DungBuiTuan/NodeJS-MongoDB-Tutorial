const express = require('express')
const personController = require('../PersonController/personController')

const router = express.Router();

router.get('/pesons',personController.getPerson);
router.post('/pesons',personController.postPerson);
router.put('/pesons',personController.putPerson);
router.delete('/pesons',personController.deletePerson);

module.exports=router;