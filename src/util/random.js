import {Random} from 'mockjs'

export default Random.extend({
  plants: () => {
    return ['上证指数', '深圳指数', '创业扳指']
  }
})
