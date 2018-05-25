import Mock from 'mockjs'
import {filterParamsForUrl} from '../../../../util/util'
// import random from '../../../util/radom'

const callback = (ctx, next) => {
  const params = filterParamsForUrl(ctx.url)
  ctx.assert(params.sid, 401, 'sid not found')
  const data = Mock.mock({
    status: '0000',
    msg: '成功',
    res: {
      'orrList|0-240': [43.18],
      'csiiList|0-240': [43.18]
    }
  })
  ctx.body = data
  next()
}

module.exports = {
  method: 'GET',
  callback
}
