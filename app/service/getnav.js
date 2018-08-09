const Service = require('egg').Service

class GetNav extends Service {
    async getnav() {
        const nav = await this.app.curl(this.app.config.BASEURL + '/all', {
            dataType: 'json',
            method: 'GET'
        })
        return nav
    }
}

module.exports = GetNav