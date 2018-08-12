const Service = require('egg').Service

class GetCard extends Service {
    // 获取指定 category 下的所有 card 
    async getcard(category) {
        const result = await this.app.curl(this.app.config.BASEURL + '/getoption', {
            method: 'GET',
            dataType: 'json',
            data: {
                category: category
            }
        })
        return result
    }
}

module.exports = GetCard