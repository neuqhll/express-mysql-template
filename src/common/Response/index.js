class Response {
    constructor(code,msg,body){
        this.respCode = code
        this.respMsg = msg
        this.respBody = body
    }

    getResponse() {
        return {
            respCode: this.respCode,
            respMsg: this.respMsg,
            respBody: this.respBody
        }
    }
}

module.exports = Response
