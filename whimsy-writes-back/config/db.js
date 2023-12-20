const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../whimsy-writes-db.sqlite');
const db = new sqlite3.Database(dbPath);

module.exports = db;