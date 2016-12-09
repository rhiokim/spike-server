const http = require('http')
const express = require('express')
const path = require('path')
const getRawBody = require('raw-body')
const displayRoutes = require('express-routemap')

const PORT = process.env.PORT || 8082
const app = express()
const rules = require('./routes/rules')

app.use(express.static(path.join(__dirname, '..', 'www')))

app.use((req, res, next) => {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb'
  }, function (err, buf) {
    if (err) return next(err)
    req.rawBody = buf
    next()
  })
})

app.use('/rules', rules)

http.createServer(app).listen(PORT, () => {
  displayRoutes(app)
})
