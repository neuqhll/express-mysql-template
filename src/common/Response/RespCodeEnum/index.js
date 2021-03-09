const RespCodeEnum = {
    OK: ['10000000', '无特殊情况'],  // 无特殊情况
    AUTHOTIZATION_EXPIRED: ['10000001', '授权过期'], // 授权过期
    AUTHORIZATION_VERIFY_FAILED: ['10000002', '授权校验失败'],// 授权校验失败
    USER_PASS_ERROR: ['10000003','用户名/密码错误，登录失败'],
    SYSTEM_ERROR: ['10000004','系统异常']
}

module.exports = RespCodeEnum
