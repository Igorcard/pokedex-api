'use strict'

import { listDirFiles } from '../helpers/file-helper.js'

export function exportSwaggerApis() {
  let apis = new Array()
  let arrayOfFiles = new Array()

  listDirFiles('./', arrayOfFiles)

  const routesFiles = arrayOfFiles.filter(file => file.includes('routes.js'))

  routesFiles.forEach(file => {
    const normalized = file.replace(/\\/g, '/')
    const posRoutes = normalized.indexOf('/routes/')
    const path = normalized.substring(posRoutes, file.length)
    apis.push(`./dist${path}`)
    apis.push(`./src${path}`)
  })

  return apis
}
