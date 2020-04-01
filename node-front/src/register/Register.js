import React from 'react';
import $ from "jquery";
import './Register.css';
import Logo from "../img/logo.png";
import Timg from "../img/timg.jpg";
import { Input, Select, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import RegisterUserName from "./RegisterUserName.js";
import RegisterUserPhone from "./RegisterUserPhone.js";
import RegisterUserPassword from "./RegisterUserPassword.js";

const { Option } = Select;

const selectBefore = (
	<Select defaultValue="+86" style={{ width: 90 }}>
		<Option value="香港+852">香港+852</Option>
		<Option value="澳门+853">澳门+853</Option>
		<Option value="台湾+886">台湾+886</Option>
	</Select>
);

export default class First extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			phone: '',
			passWord: ''
		}
	}
	changeInfos(e) {

		if (e.target.name === "username") {
			this.setState({ userName: e.target.value })
			// console.log("用户名:"+e.target.value)
		}
		if (e.target.name === "phone") {
			this.setState({ phone: e.target.value })
			// console.log("电话:"+e.target.value)
		}
		if (e.target.name === "password") {
			this.setState({ passWord: e.target.value });
			// console.log("密码:"+e.target.value)
		}
	}

	register() {
		console.log("前端" + this.state.userName, this.state.passWord, this.state.phone)
		let that = this;
		$.ajax({
			url: "/user.do",
			type: "post",
			dataType: "json",
			data: {
				method: "register",
				userName: this.state.userName,
				passWord: this.state.passWord,
				phone: this.state.phone
			},
			success(res) {
				console.log(res)

				if (res === 1 || res === "1") {
					alert("注册成功!")
					let userInfo = {
						userName: that.state.userName,
						passWord: that.state.passWord,
						phone: that.state.phone
					}
					localStorage.setItem("userInfo", userInfo);
					that.props.change.changePage("main");
				} else {
					alert("注册失败")
				}
			}
		})
	}

	render() {
		return (
			<div className="bigbox" style={{ backgroundImage: "url(" + require("../img/beijing.jpg") + ")" }}>

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
								<span className="denglu">注册</span>
								<br />
								<img src={Timg} className="timg" />

								<br />
								<br />
								<label>用户名：</label><RegisterUserName changeInfo={this} />
								<br />
								<br />
								<label>用户电话：</label><RegisterUserPhone changeInfo={this} />
								<br />
								<br />
								<label>密&nbsp;码：</label><RegisterUserPassword changeInfo={this} />
								<Button style={{ marginTop: 20, backgroundColor: "#E74B3B" }} type="bink in" onClick={this.register.bind(this)} block danger>
									注册
					          </Button>
								<span style={{ marginTop: 18, fontSize: 12 }}>注册即表示同意,
							    <a target="_blank" href="https://www.xinpianchang.com/aboutus/responsibility">《新片场用户协议》</a>
								</span>
							</div>
						</div>

						<div className="middleboxthree">
							<span>已有账号?登录</span>
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

