const PouchDB = require('pouchdb')

const db = new PouchDB('.storage/naxsi')

module.exports = db
