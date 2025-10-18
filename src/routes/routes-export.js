'use strict'

import { listDirFiles } from '../helpers/file-helper.js'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export async function exportRoutes(app) {
  let arrayOfFiles = []

  listDirFiles(__dirname, arrayOfFiles)

  const routesFiles = arrayOfFiles.filter(file => file.includes('routes.js'))

  for (const file of routesFiles) {
    const module = await import(pathToFileURL(file))
    const router = module.default
    app.use(router)
  }
}