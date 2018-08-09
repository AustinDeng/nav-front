const Controller = require('egg').Controller

class Add extends Controller {
    async category() {
        console.log(this.ctx.request.body)
        this.ctx.redirect('/')
    }

    async option() {
        console.log(this.ctx.request.body)
        this.ctx.redirect('/')
    }

    async card() {
        console.log(this.ctx.request.body)
        this.ctx.redirect('/')
    }
}

module.exports = Add