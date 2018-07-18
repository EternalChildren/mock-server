import {create} from 'apisauce'
const baseurlFilter = () => {
  const argv = process.argv
  for (let item of argv) {
    const httpReg = /^http:\/\//g
    const httpsReg = /^https:\/\//g
    if (httpReg.test(item) || httpsReg.test(item)) {
      return item
    }
  }
  throw Error('Unable to match the address for proxy server')
}

const api = create({
  baseURL: baseurlFilter(),
  headers: {
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

module.exports = (options) => {
  if (!options.url) {
    console.log('未填写接口地址')
    return false
  }
  const url = options.url
  const headers = options.headers || {}
  const method = options.method.toLowerCase() || 'get'
  const data = options.data || {}
  return new Promise((resolve, reject) => {
    api[method](url, data, {headers})
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
