const mysql = require("mysql");

const pool = mysql.createPool({
	database:"yc",
	host:"localhost",
	port:3306,
	user:"root",
	password:"123456"
})

//导入连接池对象
module.exports = pool;