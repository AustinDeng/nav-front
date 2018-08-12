module.exports = app => {
    // 给每次请求设置 setLocals 中间件
    app.config.coreMiddleware.unshift('setLocals');
}