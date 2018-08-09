module.exports = appInfo => {
    const config = {}
    config.BASEURL = '127.0.0.1:8080/api'
    config.keys = appInfo.name + '_123456'

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks' 
        }
    }
    return config
}