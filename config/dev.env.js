'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://192.168.56.100/app/api/"'
  // API_URL: '"http://10.52.2.203:8016"'
})
