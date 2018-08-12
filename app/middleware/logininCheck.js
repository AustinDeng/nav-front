// 请求管理页面需要登录管理员账号
module.exports = () => {
    return async function logininCheck(ctx, next) {
        const username = ctx.session.username
        if (!username) {
            ctx.redirect('/frontend')
        } else {
            await next()
        }
    }
}