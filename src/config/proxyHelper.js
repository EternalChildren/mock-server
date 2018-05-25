import request from '../util/request'

export default async ctx => {
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
}
