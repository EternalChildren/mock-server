import _fs from '../util/fs'

const mockUrlIsValidity = async (url) => {
  let filePath = ''
  if (url.charAt(url.length - 1) === '/') {
    filePath = `${__dirname}${url}index.js`
  } else {
    filePath = `${__dirname}${url}.js`
  }
  const hasFile = await _fs.accessFOK(filePath)
  return {
    path: filePath,
    status: hasFile
  }
}

export default async (url) => {
  try {
    const fileStat = await mockUrlIsValidity(url)
    if (fileStat.status) {
      const mockData = require(fileStat.path)
      if (typeof mockData === 'function') {
        return mockData()
      } else {
        return mockData
      }
    } else {
      return 'the mock data is not builded'
    }
  } catch (err) {
    console.log({data: err, module: 'mockBuilder'})
  }
}
