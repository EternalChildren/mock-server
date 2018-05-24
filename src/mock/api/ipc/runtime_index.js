import Mock from 'mockjs'
import random from '../../../util/radom'

const callback = (ctx, next) => {
  const data = Mock.mock({
    status: '0000',
    msg: '成功',
    'res|3': [{
      'code': '0000011',
      'name': random.name(),
      'price|1-10000.1-10': 1,
      'preClosePrice|1-10000.1-10': 1
    }]
  })
  ctx.body = data
  next()
}

module.exports = {
  method: 'GET',
  callback
}
