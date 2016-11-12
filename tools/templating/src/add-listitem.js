"use strict"
const fs = require('fs')
const listSplit = require('./list-split')

const listItemRegExp = /([a-zA-Z0-9_().]+|{.+})/gm

function listRegExp(name) {
  return new RegExp(`^( *)${name} *: *\\[([^\\]]+)\\]`, 'm')
}

function dedupe(list) {
  let result = []
  list.forEach(item => {if (result.indexOf(item) == -1) result.push(item)})
  return result
}


function addListItemStr(buff, listName, entity) {
  const re = listRegExp(listName)
  const m = buff.match(re)
  if (!m || m.length < 3) throw new Error('File formatting error in addListItem')
  const pre = m[1]
  //let items = m[2].match(listItemRegExp)
  let items = listSplit(m[2])//.match(listItemRegExp)

  items.push(entity)
  items = dedupe(items)
  items.sort()

  return buff.replace(re, `${pre}${listName}: [\n${pre}${pre}${items.join(',\n'+pre+pre)}\n${pre}]`)
}


module.exports = function addListItem(file, listName, entity) {
  const buff = fs.readFileSync(file).toString()
  fs.writeFileSync(file, addListItemStr(buff, listName, entity))
}
