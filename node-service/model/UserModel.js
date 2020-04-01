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

	register(userInfo,fn){
		let userName = userInfo.userName;
		let passWord = userInfo.passWord;
		let phone = userInfo.phone;
		console.log("注册信息:"+userName,passWord,phone)
		pool.getConnection(function(e,conn){
			let sql = `insert into users(userName,passWord,phone) values(?,?,?)`;
			conn.query(sql,[userName,passWord,phone],function(err,result){
				conn.release();
				if(err){
					console.log(err)
					return;
				}
				fn(result.affectedRows)
			})
		})
	}
}

module.exports = UserModel;