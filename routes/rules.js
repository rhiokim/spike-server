const express = require('express')
const router = express.Router()

const db = require('../libs/db')

router.route('/')
  .get((req, res, next) => {
    db.query('naxsi_rules/all', {
      limit: 0 // don't return any results
    }).then(result => {
      res.send(result)
    }).catch(err => {
      res.statusCode = err.status
      res.json(err)
    })
  })
  .post((req, res, next) => {
    console.log(req.body)
    db.put(req.body)
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        res.statusCode = err.status
        res.json(err)
      })
  })
  // .post(function (req, res, next) {
  //   next(new Error('not implemented'))
  // })
router.get('/:id', (req, res) => {
  db.get(req.params.id)
    .then(result => {
      res.send(result)
    }).catch(err => {
      res.statusCode = err.status
      res.json(err)
    })
})

router.put('/:id', (req, res) => {
  db.put(req.body)
    .then(result => {
      res.send(result)
    }).catch(err => {
      res.statusCode = err.status
      res.json(err)
    })
})

router.delete('/:id', (req, res, next) => {
  db.remove(req.params.id, req.params.rev)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.statusCode = err.status
      res.json(err)
    })
})

module.exports = router
