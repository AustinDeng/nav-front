const Controller = require('egg').Controller
const path = require('path')
const sendToWormhole = require('stream-wormhole') // 黑洞
const awaitWriteStream = require('await-stream-ready').write
const fs = require('fs')

class Add extends Controller {
    // 添加 category
    async category() {
        // 取得添加的数据
        const data = this.ctx.request.body
        // 将数据存入数据库
        const result = await this.ctx.service.add.addCategory(data)
        this.ctx.redirect('/')
    }
    // 添加 option
    async option() {
        // 取得添加的数据
        const data = this.ctx.request.body
        // 将数据存入数据库
        const result = await this.ctx.service.add.addOption(data)
        this.ctx.redirect('/')
    }
    // 添加卡片
    async card() {
        const ctx = this.ctx;
        // 得到上传的文件流
        const stream = await ctx.getFileStream();
        // 设置存储的目录地址
        const target = path.join(this.config.baseDir, 'app/public/uploads/img', stream.filename);
        //生成一个文件写入的文件流
        const writeStream = fs.createWriteStream(target); 
        try {
            // 将上传的文件流写入本地
            await awaitWriteStream(stream.pipe(writeStream))
        } catch (err) {
        // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
        await sendToWormhole(stream);
        throw err;
        }
        // 拼接图片地址
        const imageurl = 'http://127.0.0.1:7001' + '/public/uploads/img/' + stream.filename
        // 拼接数据
        let data = stream.fields
        data.imageurl = imageurl
        data.url = 'http://' + data.url
        // 将数据添加到数据库中
        const result = await this.ctx.service.add.addCard(data)
        this.ctx.redirect('/')
    }
}

module.exports = Add