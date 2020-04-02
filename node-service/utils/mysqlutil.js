const mysql = require("mysql");

const pool = mysql.createPool({
	database:"videoshare",
	host:"localhost",
	port:3306,
	user:"root",
	password:"root"
})

//导入连接池对象
module.exports = pool;