const Service = require('egg').Service

class GetCard extends Service {
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