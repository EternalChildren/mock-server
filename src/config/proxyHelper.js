import request from '../util/request'
import mockBuilder from '../mock/mockBuilder'
export default async ctx => {
  if (!ctx.headers.mock) {
    const headers = {
      'userid': ctx.headers.userid,
      'Authorization': ctx.headers.authorization
    }
    await request({
      url: ctx.url,
      method: ctx.method,
      headers,
      data: ctx.request.body
    })
      .then((res) => {
        ctx.body = res.data
      })
      .catch((err) => {
        ctx.body = err
      })
  } else {
    const body = await mockBuilder(ctx.url)
    ctx.body = body
  }
}
