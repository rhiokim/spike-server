const http = require('http')
const express = require('express')
const path = require('path')
// const getRawBody = require('raw-body')
const bodyParser = require('body-parser')
const displayRoutes = require('express-routemap')

const PORT = process.env.PORT || 8082
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'www')))

const rules = require('./routes/rules')
const rulesets = require('./routes/rulesets')
const whitelist = require('./routes/whitelist')
const whitelistsets = require('./routes/whitelistsets')

// app.use((req, res, next) => {
//   getRawBody(req, {
//     length: req.headers['content-length'],
//     limit: '1mb'
//   }, function (err, buf) {
//     if (err) return next(err)
//     req.rawBody = buf
//     next()
//   })
// })

app.use('/rules', rules)
app.use('/rulesets', rulesets)
app.use('/whitelist', whitelist)
app.use('/whitelistsets', whitelistsets)

http.createServer(app).listen(PORT, () => {
  displayRoutes(app)
})
