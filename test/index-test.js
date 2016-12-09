const PouchDB = require('pouchdb')
const mkdirp = require('mkdirp')

mkdirp('.storage')

const db = new PouchDB('.storage/db')
