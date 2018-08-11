const Service = require('egg').Service

class UserService extends Service {
    async loginin(data) {
        const result = await this.app.curl(this.app.config.BASEURL + '/user/loginin', {
            method: 'POST',
            dataType: 'json',
            data: data
        })
        return result
    }
}

module.exports = UserService