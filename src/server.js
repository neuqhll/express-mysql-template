const express = require('express')
const app = express();
const logger = require('./log')
const { port,serverName } = require('./config')
// require service center here
const usercenter = require('./usercenter')
// jwt check middleware
const { verifyJWT } = require('./middleware/verifyJWT')

// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

// logger middleware
app.use(logger.file)
app.use(logger.console)
// 使用 校验Authorization 中间件
app.use(verifyJWT)

app.post('/caonima', (req, res) => {
    res.send('Hello World!')
})
// add service center here
app.use('/usercenter',usercenter)
// start server
app.listen(port, () => console.log(`${serverName} listening on port ${port}!`))

