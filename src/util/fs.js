import fs from 'fs'
const readdir = (src) => {
  return new Promise((resolve, reject) => {
    fs.readdir(src, (err, paths) => {
      if (err) {
        reject(err)
      }
      resolve(paths)
    })
  })
}
const stat = (file) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, st) => {
      if (err) {
        reject(err)
      }
      resolve(st)
    })
  })
}
export default {
  readdir,
  stat
}
