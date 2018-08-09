module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/:option', controller.option.index)
    router.post('/add/category', controller.add.category)
    router.post('/add/option', controller.add.option)
    router.post('/add/card', controller.add.card)
}