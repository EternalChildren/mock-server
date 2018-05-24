const callback = (ctx, next) => {
  ctx.body = 'strategy'
  next()
}

module.exports = {
  method: 'GET',
  callback
}
