const Controller = require('egg').Controller

class User extends Controller {
    // 后台登录页
    async index() {
        await this.ctx.render('loginin.html')
    }
    // 用户登出
    async loginout() {
        this.ctx.app.locals.username = null
        this.ctx.session.username = null
        this.ctx.redirect('/')
    }
    // 用户登录,校验登录数据
    async loginin() {
        const ctx = this.ctx
        const body = this.ctx.request.body
        let data = new Object
        data.username = body.username

        // 校验用户名是否存在
        const result = await this.ctx.service.user.loginin(data)
        // 校验密码是否正确
        const checked = await this.ctx.compare(body.password, result.data.Message)
        
        if (checked) {
            console.log("登录成功")
            ctx.session.username = data.username
        } else {
            console.log("登录失败")
        }
        
        this.ctx.redirect('/')
    }

}

module.exports = User