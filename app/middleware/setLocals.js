// 设置 app.locals 用于模板渲染
module.exports = () => {
    return async function setlocal(ctx, next) {
        const username = ctx.session.username
        ctx.app.locals.username = username
        await next()
    }
}