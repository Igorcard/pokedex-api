'use strict'

import { listDirFiles } from '../helpers/file-helper.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Cria equivalentes de __filename e __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function exportRoutes(app) {
  let arrayOfFiles = new Array()

  listDirFiles(__dirname, arrayOfFiles)

  const routesFiles = arrayOfFiles.filter(file => file.includes('routes.js'))

  routesFiles
    .forEach(file => {
      const router = require(file).default
      app.use(router)
    })
}