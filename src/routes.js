const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userController')

routes.get('/', userController.Start)
routes.post('/newagent', userController.Store)
routes.get('/users', userController.Show)

module.exports = routes