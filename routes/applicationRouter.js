const express = require('express')
const route = express.Router()
const controller = require('../controllers/applicationController')

// route.get('/',controller.getUsers)
route.post('/',controller.postApplication)

module.exports = route