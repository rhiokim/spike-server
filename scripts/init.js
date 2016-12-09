/* global emit */
const PouchDB = require('pouchdb')

const db = new PouchDB('.storage')

const rules = {
  _id: '_design/naxsi_rules',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'rule') {
          emit(doc.id, null)
        }
      }.toString()
    }
  }
}

const rulesets = {
  _id: '_design/naxsi_rulesets',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'rulesets') {
          emit(doc.id, null)
        }
      }.toString()
    }
  }
}
const whitelist = {
  _id: '_design/naxsi_whitelist',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'whitelist') {
          emit(doc.id, null)
        }
      }.toString()
    }
  }
}
const whitelistsets = {
  _id: '_design/naxsi_whitelistsets',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'whitelistsets') {
          emit(doc.id, null)
        }
      }.toString()
    }
  }
}

console.log('postinstall')
console.log('setup default design doc into leveldb')

db.put(rules).then(() => {
  console.log('success rules')
}).catch(err => {
  console.log('%s %s', err.message, rules._id)
})

db.put(rulesets).then(() => {
  console.log('success rulesets')
}).catch(err => {
  console.log('%s %s', err.message, rulesets._id)
})

db.put(whitelist).then(() => {
  console.log('success whitelist')
}).catch(err => {
  console.log('%s %s', err.message, whitelist._id)
})

db.put(whitelistsets).then(() => {
  console.log('success whitelistsets')
}).catch(err => {
  console.log('%s %s', err.message, whitelistsets._id)
})