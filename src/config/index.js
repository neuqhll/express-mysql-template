// 服务监听的端口号
const port = 8888
// 服务名称
const serverName = 'rrdam'
// JWT续期阀值 1个小时 60分钟 * 60秒 * 1000毫秒
const tokenRenewThreshold = 60 * 60 * 1000
// JWT 签发加密串
const secret = 'cslcqmjs88'
// 不校验 JWT 接口
const passJWTVerifyUrls = ['/usercenter/auth/login','/caonima']
module.exports = {
    port,
    tokenRenewThreshold,
    secret,
    passJWTVerifyUrls
}
