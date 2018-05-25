import {create} from 'apisauce'
const baseurlFilter = () => {
  const argv = process.argv
  for (let item of argv) {
    const reg = /https:\/\//g
    if (reg.test(item)) {
      return item
    }
  }
  return 'http://www.eulerfinance.com'
}

const api = create({
  baseURL: baseurlFilter(),
  headers: {
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'appid': 'EL0001'
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
