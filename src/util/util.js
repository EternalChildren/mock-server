const filterParamsForUrl = (url) => {
  const paramsUrl = url.split('?')
  if (paramsUrl.length <= 1) {
    return []
  }
  paramsUrl.shift()
  const param = {}
  for (let item of paramsUrl) {
    param[item.split('=')[0]] = item.split('=')[1]
  }
  return param
}

export {
  filterParamsForUrl
}
