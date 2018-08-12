const Service = require('egg').Service

class UserService extends Service {
    // 请求接口,校验用户是否存在
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