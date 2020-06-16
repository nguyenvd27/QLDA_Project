const express = require('express')
const router = express.Router();

const controller  = require('../controllers/sendEmail.controller')

router.post('/', controller.sendEmail);

router.get('/check-email/:token', controller.checkEmail);

// router.get('/check-send-file', (req, res ) => {
//     res.sendFile(__dirname + '/confirm.html')
// })

module.exports = router;