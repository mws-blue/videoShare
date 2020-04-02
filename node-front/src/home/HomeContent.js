import React from "react";

import NotLoginMain from "../main/NoLoginMain";
import LoginMain from "../main/LoginMain";
import Login from "../login/Login";
import VideoItem from "../videoDesc/VideoItem"
import Register from "../register/Register.js";
import Find from "../find/Find";
import Material from "../material/material.js";
import Privacy from "../uploads/Privacy";
import Upload from "../uploads/Uploads"

class HomeContent extends React.Component {
	constructor() {
		super();
	}

	render() {
		if (this.props.currentPage === "main") {
			if (localStorage.getItem("userInfo") !== null && localStorage.getItem("userInfo") !== "" && localStorage.getItem("userInfo") !== undefined) {
				console.log("用户信息" + localStorage.getItem("userInfo"))
				console.log("触发函数没有" + this.props.currentPage)
				return (
					//登录首页
					<LoginMain change={this.props.appThis} />
				)
			} else {
				return (
					//没登录首页
					<NotLoginMain />
				)
			}
		} else if (this.props.currentPage === "find") {
			return (
				<Find />
			)
		} else if (this.props.currentPage === "material") {
			return (
				<Material />
			)
		} else if (this.props.currentPage === "privacy") {
			return (
				<Privacy change={this.props.appThis} />
			)
		}
		else if (this.props.currentPage === "upload") {
			return (
				<Upload change={this.props.appThis} />
			)
		}
		else if (this.props.currentPage === "sousuo") {
			return (
				<div>搜索</div>
			)
		} else if (this.props.currentPage === "login") {
			// console.log(this.props.appThis)
			return (
				<Login change={this.props.appThis} />
			)
		} else if (this.props.currentPage === "register") {
			return (
				<Register change={this.props.appThis} />
			)
		} else if (this.props.currentPage === "videoItem") {
			return (
				//视频详情
				<VideoItem change={this.props.appThis} />
			)
		}
		else {
			console.log("进来的是else")
			return (
				<LoginMain change={this.props.appThis} />
			)
		}
	}
}

export default HomeContent;