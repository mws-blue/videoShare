const express = require("express");//需下载
const app = express();

app.use(express.static(__dirname+"/public"));//静态资源目录
//设置post请求参数，可以通过req.body访问参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const path = require("path"); //不需要下载,path 属于node.js内置模块
const upload = require("./multerUtil.js");


//全局处理跨域
app.use("/*",function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin","*");
	next();
})

const userController =new (require("./controller/UserController")) ();

app.post("/user.do",function(req,res){
	
	let method = req.body.method;
	if(method == "login"){
       userController.login(req,res);
	}
})


//上传文件
app.post("/profile",upload.single("fileData"),function(req,res,next){
	//向客户端响应一个网络访问上传文件的URL: http://192.168.7.130:4000/uploads/时间秒数.png 
	res.json({filePath:"http://127.0.0.1:4000/uploads/"+path.basename(req.file.path)});
})


app.listen(4000,function(){
	console.log("服务器4000端口。。。。");
})