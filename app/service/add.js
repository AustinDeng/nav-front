const Service = require('egg').Service

class Add extends Service {
    // 请求接口,添加 category
    async addCategory(data) {
        const result = await this.app.curl(this.app.config.BASEURL + '/add/category', {
            method: 'POST',
            dataType: 'json',
            data: data
        })
        return result
    }
    // 请求接口,添加 option
    async addOption(data) {
        const result = await this.app.curl(this.app.config.BASEURL + '/add/option', {
            method: 'POST',
            dataType: 'json',
            data: data
        })
        return result
    }
    // 请求接口,添加 card
    async addCard(data) {
        const result = await this.app.curl(this.app.config.BASEURL + '/add/card', {
            method: 'POST',
            dataType: 'json',
            data: data
        })
        return result
    }
}

module.exports = Add