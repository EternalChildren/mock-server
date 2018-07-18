import Mock from 'mockjs'
import random from '../../../util/random'

module.exports = () => {
  return Mock.mock({
    status: '0000',
    msg: '成功',
    res: {
      'latestAdjNum|1-10': 1,
      'latestAdjList|1-10': [
        {
          'opst|6': random.natural(0, 10).toString(),
          'name': random.first(),
          'opsd|1': false,
          'opstt': random.date('T'),
          'opstp|1-100': 1,
          'yield|0.1-5': 1
        }
      ]
    }
  })
}
