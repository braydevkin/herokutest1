const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userController')

routes.get('/', userController.Start)
routes.post('/newagent', userController.Store)
routes.get('/users', userController.Show)
routes.post('/send', userController.sendMessage)
routes.get('/receive', userController.receiveMessage)

module.exports = routes