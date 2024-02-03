require('dotenv').config();

if (process.env.NOTE_ENV === 'dev') {
    module.exports = require("./dev");
} else {
    module.exports = require('./ci');
}