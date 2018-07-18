import Mock from 'mockjs'

module.exports = () => {
  return Mock.mock({
    status: '0000',
    msg: '成功',
    res: {
      'dataTwo|0-240': [43.18]
    }
  })
}
