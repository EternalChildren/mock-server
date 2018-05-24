import Koa from 'koa'
import routerHelper from './config/routerHelper'
const __MOCK__ = process.argv.includes('mock')

const app = new Koa()
if (__MOCK__) {
  const controllers = routerHelper(`${__dirname}/mock`)
  app.use(controllers)
} else {
  const controllers = routerHelper(`${__dirname}/controllers`)
  app.use(controllers)
}

app.listen(1516)
console.log('mock server has worked')
