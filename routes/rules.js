const express = require('express')
const router = express.Router()

const rules = require('../libs/db')

router.get('/', (req, res) => {
  rules.query('naxsi_rules/all', {
    limit: 0 // don't return any results
  }).then(result => {
    res.send(result)
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router
