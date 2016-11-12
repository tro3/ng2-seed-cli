"use strict"

const up = '\'"({['
const dn = '\'"]})'

let listSplit
module.exports = listSplit = (str) => {
  let result = []
  let stack = []
  let current = ''

  for (let i=0; i<str.length; i++) {
    if (str[i] == ',' && stack.length == 0) {
      if (current.trim()) result.push(current.trim())
      current = ''
    }
    else if (dn.indexOf(str[i]) == stack[stack.length-1]) {
      stack.pop()
      current += str[i]
    }
    else if (up.indexOf(str[i]) > 0) {
      stack.push(up.indexOf(str[i]))
      current += str[i]
    }
    else {
      current += str[i]
    }
  }
  if (current.trim()) result.push(current.trim())
  return result
}

//console.log(listSplit('"fr,ed", "joe"'))
//console.log(listSplit(' '))
