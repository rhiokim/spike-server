const PouchDB = require('pouchdb')

const db = new PouchDB('.storage/db')

module.exports = db
