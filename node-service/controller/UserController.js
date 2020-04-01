const userModel = require("../model/UserModel");

class UserController{
	constructor(){
		this.userModel = new userModel();
	}

	login(req,res){
		
		let userInfo = {
			userName:req.body.userName,
			passWord:req.body.passWord
		}
		
		let s = this.userModel.login(userInfo,function(result){
			console.log("数据库数据");
            console.log(result);
			res.json(result);
		})
	}

	register(req,res){
		console.log(req.body)
		let userInfo = {
			userName:req.body.userName,
			passWord:req.body.passWord,
			phone:req.body.phone
		}
		let s = this.userModel.register(userInfo,function(result){
			console.log("数据库数据");
            console.log(result);
			res.json(result);
		})
	}
}

module.exports = UserController;