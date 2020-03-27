const pool = require("../utils/mysqlutil");

class UserModel{
	login(userInfo,fn){
		let userName = userInfo.userName;
		let passWord = userInfo.passWord;
		console.log("用户名"+userName,passWord)
		pool.getConnection(function(e,conn){
			let sql = "SELECT * FROM users WHERE userName=? AND passWord=?";
			conn.query(sql,[userName,passWord],function(err,result){
				conn.release();
				if(err){
					console.log(err);
					return;
				}
				fn(result);
			})
		})
	}
}

module.exports = UserModel;