module.exports = appInfo => {
    const config = {}
    // 请求接口的地址
    config.BASEURL = '127.0.0.1:8080/api'
    // cookie key
    config.keys = appInfo.name + '_123456'
    // 加密插件
    config.bcrypt = {
        saltRounds: 0
    }
    // 设置 nunjucks 模板引擎
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks' 
        }
    }
    return config
}