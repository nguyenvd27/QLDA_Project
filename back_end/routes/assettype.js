const express = require('express')
const cors = require('cors')
const controller  = require('../controllers/assetType.controller')
const router = express.Router();

router.get('/', controller.index);

router.post('/', controller.create);

// update
router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;