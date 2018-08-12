module.exports = app => {
    const { router, controller } = app
    // 首页, 同时也是管理页面
    router.get('/', app.middleware.logininCheck(), controller.home.index)
    // option 页面
    router.get('/:option', controller.option.index)
    // 添加 category
    router.post('/add/category', controller.add.category)
    // 添加 option
    router.post('/add/option', controller.add.option)
    // 添加 card
    router.post('/add/card', controller.add.card)
    // 后台登录界面
    router.get('/user/loginin', controller.user.index)
    // 提交信息
    router.post('/user/loginin', controller.user.loginin)
    // 管理员登出
    router.get('/user/loginout', controller.user.loginout)
}