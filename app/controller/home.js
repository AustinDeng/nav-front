const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        // 获取导航栏数据
        const nav = await this.ctx.service.getnav.getnav()
        await this.ctx.render('index.html', {
            title: 'nav',
            nav: nav.data,
            results: nav.data
        })
    }
}

module.exports = HomeController