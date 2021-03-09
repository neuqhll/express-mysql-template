const express = require('express')
const AuthService = require('../service')
const auth = express.Router()

const service = new AuthService()

auth.post('/getUserList', async (req,res)=>{
    return await service.getUserList()
})

module.exports = auth
