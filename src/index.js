import Koa from 'koa'
import koaBody from 'koa-body'
import mockHelper from './config/mockHelper'
import proxyHelper from './config/proxyHelper'

const __MOCK__ = process.argv.includes('mock')

const app = new Koa()
app.use(koaBody())

if (__MOCK__) {
  const controllers = mockHelper(`${__dirname}/mock`)
  app.use(controllers)
  console.log('mock server has worked')
} else {
  if (process.argv.length < 3) {
    throw Error('proxy server url is undefined')
  }
  app.use(proxyHelper)
  console.log('proxy server has worked')
}

app.listen(1516)
