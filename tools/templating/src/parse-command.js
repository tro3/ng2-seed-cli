"use strict"

/*
Command: aaaa/bbb/ccccc-dddd-eeee.fff
         --path-- ---name--- --type--
         -----fullName------

Template context: ccccc-dddd-gggg-hhhh.jjjj.kkk
                  ---name--- ---templateName---
                  ------fullname------ ----basetype
                  -------completeName------ ---ext
*/

const types = require('./types')

function getPath(command, type) {
  let path = command.replace('\\', '/').split('/').slice(0,-1).join('/')
  const dir = types[type].dir
  if (dir) path += `/${getFullName(command)}`
  return path
}

function getType(command) {
  let keys = Object.keys(types)
  keys.sort((a,b) => b.length-a.length)
  for (let key of keys) {
    if (command.slice(-key.length) == key) return key
  }
  throw new Error(`No type found for '${command}'`)
}

function getName(command) {
  let typeLength = getType(command).length + 1
  return command.replace('\\', '/').split('/').slice(-1)[0].slice(0,-typeLength)
}

function getFullName(command) {
  return command.replace('\\', '/').split('/').slice(-1)[0].split('.')[0]
}


function camelize(str) {
  str = str.replace('.', '-')
  let buff = ''
  let cap = true
  for (let ltr of str) {
    if (ltr == '-') cap = true
    else if (cap) {buff += ltr.toUpperCase(); cap = false}
    else buff += ltr
  }
  return buff
}

function repeat(str, n) {
  let buff = []
  for (let i=0; i<n; i++) buff.push(str)
  return buff
}


function getContext(config, template) {
  const dotCount = template.name.split('.').length == 3
  const templateBase = (dotCount) ? template.name.split('.')[0] : ''
  const templateType = template.name.split('.')[(dotCount)?1:0]
  const templateExt = template.name.split('.')[(dotCount)?2:1]
  const sep = (dotCount) ? '-' : ''

  const fullName = `${config.name}${sep}${templateBase}`
  const completeName = `${config.name}${sep}${templateBase}.${templateType}`
  const fileName = `${config.name}${sep}${templateBase}.${templateType}.${templateExt}`

  return {
    path: config.path,
    name: config.name,
    type: config.type,
    template: template,
    fileName: fileName,
    fileExt: templateExt,
    fullName: fullName,
    completeName: completeName,
    baseType: templateType,
    rootPath: repeat('..', config.path.split('/').length).join('/'),
    coreEntityName: camelize(config.name),
    baseEntityName: camelize(fullName),
    entityName: camelize(completeName),
  }
}

let parseCommand;
module.exports = parseCommand = (command) => {
  const type = getType(command)
  if (!types[type]) throw new Error(`No type '${type}'`)
  const config = {
    path: getPath(command, type),
    name: getName(command),
    type: getType(command),
    attrs: types[type],
    getContext: function(template) {return getContext(this, template)},
  }
  return config
}


//let cfg = parseCommand('frogs/frog-detail.component')
//console.log(cfg)
// console.log(cfg.getContext(cfg.attrs.templates[0]))//.getContext('resolve.service.ts'))
