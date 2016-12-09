const express = require('express')
const router = express.Router()

const db = require('../libs/db')

router.get('/', (req, res) => {
  db.query('naxsi_whitelistsets/all', {
    limit: 0 // don't return any results
  }).then(result => {
    res.send(result)
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router
