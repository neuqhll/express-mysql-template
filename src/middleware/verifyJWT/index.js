const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const { tokenRenewThreshold, secret, passJWTVerifyUrls } = require('../../config')
const Response = require('../../common/Response')
const RespCodeEnum = require('../../common/Response/RespCodeEnum')
const verify = promisify(jwt.verify)

const verifyJWT = async (req,res,next) => {
    if(passJWTVerifyUrls.indexOf(req.path) !== -1){
        next()
        return
    }
    // 获取前端在Header中带的jwt
    if(!req.get('Authorization')){
        const response = new Response(...RespCodeEnum.AUTHORIZATION_VERIFY_FAILED, null)
        res.send(response)
        return
    }
    const token = req.get('Authorization').split(' ')[1]
    console.log(token)
    try{
        const res = await verify(token,secret)
        // 过期时间
        const exp = res.exp
        // 当前时间戳
        const curTimeStamp = new Date().getTime()
        if(exp < curTimeStamp){
            // 过期，返回过期, 重新登录
            // TODO
            const response = new Response(...RespCodeEnum.AUTHORIZATION_EXPIRED, null)
            res.send(response)
        } else if(exp - curTimeStamp < tokenRenewThreshold ) {
            const payload = delete res.iat
            const token = jwt.sign(res, secret)
            res.header('Authorization', token)
            next()
        } else {
            next()
        }
    } catch(err) {
        // 解析失败，返回解析失败错误，前台登出
        // TODO
        console.error(err)
        const response = new Response(...RespCodeEnum.AUTHORIZATION_VERIFY_FAILED, null)
        res.send(response)
    }
}

module.exports = {
    verifyJWT
}
