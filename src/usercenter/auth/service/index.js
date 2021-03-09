require('module-alias/register')
const AuthDao = require('@usercenter/auth/dao')
const Response = require('../../../common/Response')
const RespCodeEnum = require('../../../common/Response/RespCodeEnum')
const jwt = require('jsonwebtoken')
const {secret} = require('../../../config')
const dao = new AuthDao()

class AuthService {
    async getUserList() {
        let userList = await dao.getUserList()
        const response = new Response(...RespCodeEnum.OK, { userList })
        return response
    }
    async wxMiniProgramLogin() {
        return
    }
}
const getAllUserService = async () => {
    let userList = await dao.getAllUserDao()
    return userList
}

const loginService = async (req,res) => {
    const {username,password} = req.body
    const userInfo = await dao.loginDao(username,password)
    if(userInfo.length === 0){
        return new Response(...RespCodeEnum.USER_PASS_ERROR, null)
    } else if(userInfo.length !== 1){
        // TODO 异常如何处理？？？
        console.error('错误！！！')
    } else {
        // TODO 签发JWT
        const payload = {exp:new Date().getTime() + 24 * 60 * 60 * 1000, username }
        res.header('Authorization', 'Bearer ' + jwt.sign(payload,secret))
        return new Response(...RespCodeEnum.OK, '登录成功')
    }
}

module.exports = AuthService
