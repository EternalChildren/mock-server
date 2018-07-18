import Mock from 'mockjs'

module.exports = () => {
  return Mock.mock({
    status: '0000',
    msg: '成功',
    res: {
      'dataThree|0-240': [43.18]
    }
  })
}
