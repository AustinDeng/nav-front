const Controller = require('egg').Controller

class OptionController extends Controller {
    async index() {
        // 获取 option 参数
        const category = this.ctx.params.option
        // 获取导航栏数据
        const nav = await this.ctx.service.getnav.getnav()
        // 获取指定 option 下的数据
        const results = await this.ctx.service.getcard.getcard(category)
        // 将请求到的数据用于渲染模板
        await this.ctx.render('option.html', {
            title: category,
            nav: nav.data,
            results: results.data
        })
    }
}

module.exports = OptionController