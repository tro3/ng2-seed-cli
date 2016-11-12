"use strict"
const fs = require('fs')

const reGlobal = / *import +{.+} +from +['"][^.].+['"] *;?/g
const reLocal = / *import +{.+} +from +['"]\..+['"] *;?/g


function format(line) {
  return line
    .replace(/"/g, "'")
    .replace(/([^ ])}/, '$1 }')
    .replace(/{([^ ])/, '{ $1')
    .replace(/; *$/, '')
}

function dedupe(list) {
  let result = []
  list.forEach(item => {if (result.indexOf(item) == -1) result.push(item)})
  return result
}


function addImportLine(buff, entity, refFile) {
  let globals = buff.match(reGlobal) || []
  let locals = buff.match(reLocal) || []
  globals.forEach((txt,ind) => globals[ind] = format(txt))
  locals.forEach((txt,ind) => locals[ind] = format(txt))
  buff = buff.replace(reGlobal, '').replace(reLocal, '').trim()

  const line = `import { ${entity} } from '${refFile}'`
  if (refFile.slice(0,1) == '.') locals.push(line)
  else globals.push(line)

  globals = dedupe(globals)
  locals = dedupe(locals)
  globals.sort()
  locals.sort()
  return `${globals.join('\n')}\n\n${locals.join('\n')}\n\n${buff}`
}


module.exports = function addImport(file, entity, ref) {
  const buff = fs.readFileSync(file).toString()
  fs.writeFileSync(file, addImportLine(buff, entity, ref))
}
