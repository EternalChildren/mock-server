import _fs from '../util/fs'
const router = require('koa-router')()
const __MOCK__ = process.argv.includes('mock')

let reg = /(?<=\bcontrollers).+(?=.js)/g
if (__MOCK__) {
  reg = /(?<=\bmock\/).+(?=.js)/g
} else {
  reg = /(?<=\bcontrollers\/).+(?=.js)/g
}

const addRouter = (src, info) => {
  const routerUrl = `/${src.match(reg)[0]}`
  switch (info.method) {
    case 'GET': {
      router.get(routerUrl, info.callback)
      break
    }
    case 'POST': {
      router.post(routerUrl, info.callback)
      break
    }
    default: {
      router.get(routerUrl, info.callback)
      break
    }
  }
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
