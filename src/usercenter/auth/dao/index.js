const db = require('../../db')
class AuthDao {
    async getUserList(){
        const sql = 'select * from user_info'
        try {
            const results = await db.query(sql)
            return results
        } catch (err) {
            throw err
        }
    }
}

module.exports = AuthDao
