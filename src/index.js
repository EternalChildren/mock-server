import Koa from 'koa'
import koaBody from 'koa-body'
import proxyHelper from './config/proxyHelper'

const app = new Koa()

app.use(koaBody())
app.use(proxyHelper)

app.listen(1516)
console.log(`[INFO] Starting Mock Server localhost on :::1516`)
