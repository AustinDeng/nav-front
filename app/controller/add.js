const Controller = require('egg').Controller
const path = require('path')
const sendToWormhole = require('stream-wormhole')
const awaitWriteStream = require('await-stream-ready').write
const fs = require('fs')

class Add extends Controller {
    async category() {
        const data = this.ctx.request.body
        const result = await this.ctx.service.add.addCategory(data)
        
        console.log(result.data)
        this.ctx.redirect('/')
    }

    async option() {
        const data = this.ctx.request.body
        const result = await this.ctx.service.add.addOption(data)

        console.log(result.data)
        this.ctx.redirect('/')
    }

    async card() {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        const target = path.join(this.config.baseDir, 'app/public/uploads', stream.filename);
        //生成一个文件写入 文件流
        const writeStream = fs.createWriteStream(target); 
        try {
            await awaitWriteStream(stream.pipe(writeStream))
        } catch (err) {
        // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
        await sendToWormhole(stream);
        throw err;
        }

        const imageurl = '127.0.0.1:7001' + '/public/uploads/' + stream.filename
        let data = stream.fields
        data.imageurl = imageurl

        const result = await this.ctx.service.add.addCard(data)
        console.log(result.data)
        this.ctx.redirect('/')
    }
}

module.exports = Add