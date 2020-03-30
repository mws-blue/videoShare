import React from "react";
import $ from "jquery";
import LoginUserName from "./LoginUserName";
import LoginUserPassword from "./LoginUserPassword";

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
			<div className="login-page">
				<div>
					<div>
						<span>密码登录</span>
						<span>短信登录</span>
						<div className="loginForm">
							<div className="eleItem">
								<label>登录名：</label><LoginUserName changeInfo={this}/>
							</div>
							<div className="eleItem">
								<label>密&nbsp;码：</label><LoginUserPassword changeInfo={this}/>
							</div>
							<div className="btnItem">
								<input type="submit" name="button" id="button" value="提交" onClick={this.login.bind(this)} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;