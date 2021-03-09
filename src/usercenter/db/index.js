var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '172.20.23.148',
    user            : 'root',
    password        : 'Aa999999@',
    database        : 'usercenter'
});

const query = (sql,args) => {
    return new Promise((resolve, reject) => {
        if(args) {
            pool.query(sql, args, (error, results, fields) => {
                if (error) {
                    return reject(error)
                }
                return resolve(results)
            })
        } else {
            pool.query(sql, (error, results, fields) => {
                if (error) {
                    return reject(error)
                }
                return resolve(results)
            })
        }
    })
}

// (async function (){
//     let a = await query('select 1+1')
//     console.log(a)
// })()

module.exports = {
    query
}
