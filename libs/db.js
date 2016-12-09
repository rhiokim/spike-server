const PouchDB = require('pouchdb')

const db = new PouchDB('.storage')

module.exports = db
