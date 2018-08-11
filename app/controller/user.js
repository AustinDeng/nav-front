const Controller = require('egg').Controller

class User extends Controller {
    async index() {
        await this.ctx.render('loginin.html')
    }
    
    async loginin() {
        const data = this.ctx.request.body
        const result = await this.ctx.service.user.loginin(data)
        console.log(result.data)
        
        this.ctx.redirect('/')
    }

}

module.exports = User