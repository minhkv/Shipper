class DatabaseTable {
	constructor(params) {
		this.database = params.database;
		this.name = params.name;
		this.fields = params.fields;
		this.table = this.database.define(this.name, this.fields, {
			timestamps: false,
			freezeTableName: true,
			tableName: this.name
		});
	}
	getAll() {
		return new Promise((resolve, reject) => {
			this.table.findAll().then(res => {
				resolve(res);
			}, error => {
				// console.log(error);
				reject(error);
			});
		});
	}
}



module.exports = DatabaseTable;