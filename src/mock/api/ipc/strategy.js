import Mock from 'mockjs'
import random from '../../../util/random'

module.exports = () => {
  return Mock.mock({
    status: '0000',
    msg: '成功',
    'res|1-5': [
      {
        'id|16': 'c',
        'name': random.first(),
        'type': '稳健型',
        'runTime|100-200': 1,
        'tradeDate': random.date('T'),
        'yield|0.1-10': 1,
        'yearYield|0.1-10': 0.829371,
        'history|0.1-10': 0.602092,
        'retreat|0.1-10': 0.090654,
        'csII|0.1-10': 0.002981
      }
    ]
  })
}
