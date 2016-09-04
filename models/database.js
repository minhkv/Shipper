var Sequelize = require('sequelize');
var config = require('../config');
var sequelize = new Sequelize(config.database, config.username, config.password);

module.exports = sequelize;