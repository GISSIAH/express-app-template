const { welcome } = require('../controller/welcome.controller')
const router = require('express').Router()

router.get('/',welcome)

module.exports = router 