const homeModel = require("../model/HomeModel");

class HomeController{
	constructor(){
		this.homeModel = new homeModel();
	}

	getMainVideo(req,res){
		let s = this.homeModel.getMainVideo(function(result){
			res.json(result);
		})
	}

	getItemVideo(req,res){
		let vId = req.body.vId;
		let s = this.homeModel.getItemVideo(vId,function(result){
			console.log(result)
			res.json(result);
		})
	}
}

module.exports = HomeController;