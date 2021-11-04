const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');

/* GET travek page. */
router.get('/', controller.travel);

module.exports = router;