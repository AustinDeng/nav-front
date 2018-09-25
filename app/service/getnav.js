const Service = require('egg').Service

class GetNav extends Service {
    // 获取导航的数据
    async getnav() {
        let nav = await this.app.curl(this.app.config.BASEURL + '/all', {
            dataType: 'json',
            method: 'GET'
        })
        return nav
    }
}

module.exports = GetNav