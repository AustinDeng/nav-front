const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        const nav = await this.ctx.service.getnav.getnav()
        // const results = nav
        await this.ctx.render('index.html', {
            title: 'nav',
            nav: nav.data,
            results: nav.data
        })
    }
}

module.exports = HomeController