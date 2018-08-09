const Controller = require('egg').Controller

class OptionController extends Controller {
    async index() {
        const category = this.ctx.params.option

        const nav = await this.ctx.service.getnav.getnav()
        const results = await this.ctx.service.getcard.getcard(category)

        await this.ctx.render('option.html', {
            title: category,
            nav: nav.data,
            results: results.data
        })
    }
}

module.exports = OptionController