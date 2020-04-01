const pool = require("../utils/mysqlutil");

class HomeModel{
	getMainVideo(fn){
         pool.getConnection(function(e,conn){
			 let sql = `select v.*,u.userName from video v inner join  users u on v.userId=u.userId`;
			 conn.query(sql,[],function(err,result){
				 conn.release();
				 if(err){
					 console.log(err);
					 return;
				 }
				 fn(result);
			 })
		 })
	}

	getItemVideo(vId,fn){
		pool.getConnection(function(e,conn){
			let sql = `select v.*,u.userName from video v inner join  users u on v.userId=u.userId AND vId=?`
			conn.query(sql,[vId],function(err,result){
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

module.exports = HomeModel;