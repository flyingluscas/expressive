/**
 * Routes
 */
'use strict'

const auth = require('./modules/Auth')
const user = require('./modules/User')

module.exports = app => {
  app.use('/admin', auth)

  // app.use('/users', auth, user)
  app.use('/users', user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
