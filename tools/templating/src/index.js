"use strict"

/*
type -> config
        [templates] -> templateName
                       templateFile
                       templateConfig
*/

const fs = require('fs')
const path = require('path')
const addImport = require('./add-import')
const addListItem = require('./add-listitem')
const addRoute = require('./add-route')
const findUpfile = require('./find-upfile')
const parseCommand = require('./parse-command')

const rootDir = path.normalize(`${__dirname}/../../../src/app`)
const templateDir = path.normalize(`${__dirname}/../templates`)


function exists(path) {
  try {
    fs.statSync(path)
    return true
  } catch (err) {
    return false
  }
}


function processTemplate(template, context) {
  const templateFile = template.file || template.name
  let buff = fs.readFileSync(`${templateDir}/${templateFile}`).toString()

  for (let key in context) {
    let val = context[key]
    let re = new RegExp(`##${key}##`, 'g')
    buff = buff.replace(re, val)
  }

  fs.writeFileSync(`${rootDir}/${context.path}/${context.fileName}`, buff)
  console.log(`Created ${context.path}/${context.fileName}`)
}


let main;
module.exports = main = (command) => {
    const cfg = parseCommand(command)
    const outPath = `${rootDir}/${cfg.path}`
    if (!exists(outPath)) fs.mkdirSync(outPath)
    for (let template of cfg.attrs.templates) {
      let ctxt = cfg.getContext(template)
      processTemplate(template, ctxt)
    }
    for (let template of cfg.attrs.templates) {
      let ctxt = cfg.getContext(template)
      let outFile = `${outPath}/${ctxt.fileName}`

      for (let suffix of template.imports || []) {
        let up = findUpfile(outFile, suffix)
        addImport(up.absPath, ctxt.entityName, up.relPath)
        console.log(`Imported ${ctxt.entityName} into ${up.absPath.slice(rootDir.length+1)}`)
      }

      for (let listName of template.listItems || []) {
        let up = findUpfile(outFile, 'module.ts')
        addListItem(up.absPath, listName, ctxt.entityName)
        console.log(`Added ${ctxt.entityName} into ${up.absPath.slice(rootDir.length+1)} ${listName} list`)
      }

      if (template.addRoute) {
        let up = findUpfile(outFile, 'routes.ts')
        addRoute(up.absPath, `...${ctxt.entityName}`)
        console.log(`Added ${ctxt.entityName} into ${up.absPath.slice(rootDir.length+1)} routes list`)
      }

    }

}

//main('project/project.resolveService')
//main('common.commonModule')
//main('common/view.component')
//main('common/api.service')
//main('project/project-detail.module')
