const callback = (ctx, next) => {
  ctx.body = 'runtime_index'
  next()
}

module.exports = {
  method: 'GET',
  callback
}
