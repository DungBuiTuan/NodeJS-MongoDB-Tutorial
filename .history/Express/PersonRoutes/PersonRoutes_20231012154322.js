const express = require('express')
const personController = require('../PersonController/personController')

const router = express.Router();

router.get('/pesons',personController.getPerson);
