import React from "react";
import $ from "jquery";
import LoginUserName from "./LoginUserName";
import LoginUserPassword from "./LoginUserPassword";
import './Login.css';
import { Input, Select,Button } from 'antd';
import Logo from "../img/logo.png";
import Timg from "../img/timg.jpg";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			passWord: ''
		}
	}
	changeInfos(e) {
		console.log(e.target.name);
		if (e.target.name === "username") {
			this.setState({ userName: e.target.value })
		}
		if (e.target.name === "password") {
			this.setState({ passWord: e.target.value });
		}
	}

	login() {
		console.log("提交事件")
		let that = this;
		$.ajax({
			url: "/user.do",
			type: "post",
			dataType: "text",
			data: {
				method: "login",
				userName: this.state.userName,
				passWord: this.state.passWord
			},
			success(res) {
				let userInfo = JSON.parse(res);
				console.log("用户信息")
				console.log(userInfo);
				console.log(userInfo.userName)
				
				localStorage.setItem("userInfo", userInfo);
				that.props.change.changePage("main");
			}
		})
	}


	render() {
		return (
			// <div className="login-page">
			// 	<div>
			// 		<div>
			// 			<span>密码登录</span>
			// 			<span>短信登录</span>
			// 			<div className="loginForm">
			// 				<div className="eleItem">
			// 					<label>登录名：</label><LoginUserName changeInfo={this}/>
			// 				</div>
			// 				<div className="eleItem">
			// 					<label>密&nbsp;码：</label><LoginUserPassword changeInfo={this}/>
			// 				</div>
			// 				<div className="btnItem">
			// 					<input type="submit" name="button" id="button" value="提交" onClick={this.login.bind(this)} />
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			<div className="bigbox" style={{backgroundImage: "url(" + require("../img/beijing.jpg") + ")"}}>
			    <div className="top">
					      <img src={Logo} />
						  <span>|</span>
						  <span>通行证</span>
					  </div>
			    <div className="middle">
					      <div className="middlebox">
						      <div className="middleboxone">
							      <img src={Logo} />
								  <h1 lang="zh-CN" className="jsx-1447149503">用作品打动世界</h1>
							  </div>
							  <div className="middleboxtwo">
							      <div className="buttombox">
								      <span className="denglu">密码登录</span>
									  <br/>
									  <img src={Timg} className="timg"/>
									  <br/>
									  <br/>
								      <label>用户名：</label><LoginUserName changeInfo={this}/>
									  <br/>
									  <br/>
									  <label>密&nbsp;码：</label><LoginUserPassword changeInfo={this}/>
								      
								      <Button style={{marginTop:20,backgroundColor:"#E74B3B"}} type="bink in" block danger 
									        onClick={this.login.bind(this)}>
								            登录
								          </Button>
									  </div>
								  </div>
							      
							  <div className="middleboxthree">   
							      <span>没有账号?注册</span>
							  </div>
						  </div>
					  </div>
			    <div className="lower">
					      <span>@ 2020 新片场-京ICP备14003808号-1</span>
					  </div>
			</div>
		)
	}
}

export default Login;