"use strict"
const fs = require('fs')
const listSplit = require('./list-split')

const re = /\[([\s\S]+)\]/m

function dedupe(list) {
  let result = []
  list.forEach(item => {if (result.indexOf(item) == -1) result.push(item)})
  return result
}

function addRouteStr(buff, entity) {
  const m = buff.match(re)
  if (!m || m.length < 2) throw new Error('File formatting error in addRoute')
  let items = listSplit(m[1])

  items.push(entity)
  items = dedupe(items)

  return buff.replace(re, `[\n  ${items.join(',\n  ')}\n]`)
}


module.exports = function addRoute(file, entity) {
  const buff = fs.readFileSync(file).toString()
  fs.writeFileSync(file, addRouteStr(buff, entity))
}
