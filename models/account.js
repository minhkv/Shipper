var Sequelize = require('sequelize');
var database = require('./database');
var DatabaseTable = require('./database-table');

var table = new DatabaseTable({
	database: database,
	name: 'account', 
	fields: {
		email: Sequelize.STRING,
		user_name: Sequelize.STRING,
		password: Sequelize.STRING,
		role: Sequelize.STRING, 
	}
});
table.getAll().then(data => {
	console.log(data);
}, error => {
	console.log("Error");
	console.log(error);
});
module.exports = table;
