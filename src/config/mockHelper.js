import _fs from '../util/fs'
const router = require('koa-router')()

const addRouter = (src, info) => {
  const reg = /(?<=\bmock\/).+(?=.js)/g
  const routerUrl = `/${src.match(reg)[0]}`
  const method = info.method.toLowerCase()
  router[method](routerUrl, info.callback)
}

const mapRouters = async (src, router) => {
  try {
    const paths = await _fs.readdir(src)
    for (let path of paths) {
      const _src = `${src}/${path}`
      const st = await _fs.stat(_src)
      if (st.isFile()) {
        const routerInfo = require(_src)
        addRouter(_src, routerInfo)
      } else if (st.isDirectory()) {
        mapRouters(_src, router)
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default (dirname) => {
  mapRouters(dirname, router)
  return router.routes()
}
