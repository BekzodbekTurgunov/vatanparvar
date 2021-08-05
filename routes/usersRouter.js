const express = require('express')
const route = express.Router()
const controller = require('../controllers/userController')

route.get('/',controller.getUsers)
route.post('/',controller.postUsers)

module.exports = route