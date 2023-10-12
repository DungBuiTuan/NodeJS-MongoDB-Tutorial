const express = require('express')
const personController = require('../PersonController/personController')

const router = express.Router();

router.get('/persons',personController.getPerson);
router.post('/persons',personController.postPerson);
router.put('/persons/:id',personController.putPerson);
router.delete('/persons/:id',personController.deletePerson);

module.exports=router;