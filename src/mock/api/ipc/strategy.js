const callback = (ctx, next) => {
  ctx.body = 'mock strategy'
  next()
}

module.exports = {
  method: 'GET',
  callback
}
