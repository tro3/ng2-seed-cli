"use strict"
const fs = require('fs')

function suffixMatch(fname, suffix) {
  return fname.slice(-1*suffix.length) == suffix
}

/*
  Find a file upward in the heirarchy with the given suffix
  Response format: {
   absPath: path to file found
   relPath: path from the found file to the start file
  }
*/
module.exports = function findUpFile(startFile, suffix) {
  startFile = startFile.replace('\\', '/')
  let stack = startFile.split('/').slice(0,-1)
  startFile = startFile.split('/').slice(-1)[0]
  let outStack = []
  let outFile = null
  while (stack.length > 0) {
    const files = fs.readdirSync(stack.join('/'))
    for (let file of files) {
      if (suffixMatch(file, suffix) && (file != startFile)) return {
        absPath: stack.join('/') + '/' + file,
        relPath: '.' + (outStack.length?'/':'') + outStack.reverse().join('/') + '/' + startFile.split('.').slice(0,-1).join('.')
      }
    }
    outStack.push(stack.pop())
  }
  throw new Error('File suffix not found in findUpFile')
}
