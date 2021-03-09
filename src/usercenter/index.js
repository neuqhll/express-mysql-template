const express = require('express')
const usercenter = express()
const auth = require('./auth')

usercenter.use('/auth',auth)

module.exports = usercenter
