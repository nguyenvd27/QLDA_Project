const express = require('express')
const router = express.Router();

const controller  = require('../controllers/asset.controller')
const isAdmin = require('../controllers/user.controller')

router.get('/', controller.index);

router.get('/:id', controller.show)

router.post('/', isAdmin.isAdmin, controller.create);

router.put('/:id', isAdmin.isAdmin, controller.update);

router.delete('/:id', isAdmin.isAdmin, controller.delete);

module.exports = router;