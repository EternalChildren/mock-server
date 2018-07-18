import Mock from 'mockjs'
import random from '../../../util/random'

module.exports = () => {
  return Mock.mock({
    status: '0000',
    msg: '成功',
    'res|3': [{
      'code': '0000011',
      'name|+1': random.plants(),
      'price|1-10000.1-10': 1,
      'preClosePrice|1-10000.1-10': 1
    }]
  })
}
