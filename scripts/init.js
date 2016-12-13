/* global emit */
const PouchDB = require('pouchdb')
const mkdirp = require('mkdirp')

mkdirp('.storage')

const db = new PouchDB('.storage/naxsi')

const rules = {
  _id: '_design/naxsi_rules',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'rule') {
          emit(doc)
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
        if (doc.type === 'ruleset') {
          emit(doc)
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
        if (doc.type === 'whiterule') {
          emit(doc)
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
        if (doc.type === 'whiteruleset') {
          emit(doc)
        }
      }.toString()
    }
  }
}
const matchingzones = {
  _id: '_design/naxsi_matchingzone',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'mz') {
          emit(doc)
        }
      }.toString()
    }
  }
}
const scores = {
  _id: '_design/naxsi_scores',
  views: {
    all: {
      map: function (doc) {
        if (doc.type === 'score') {
          emit(doc)
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

db.put(matchingzones).then(() => {
  console.log('success matchingzones')
}).catch(err => {
  console.log('%s %s', err.message, matchingzones._id)
})

db.put(scores).then(() => {
  console.log('success scores')
}).catch(err => {
  console.log('%s %s', err.message, scores._id)
})
