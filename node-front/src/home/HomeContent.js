import React from "react";

import NotLoginMain from "../main/NoLoginMain";
import LoginMain from "../main/LoginMain";
import Login from "../login/Login";


class HomeContent extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		if (this.props.currentPage === "main") {
			if(localStorage.getItem("userInfo")>0){
              return(
				  //登录首页
                  <LoginMain />
			  )
			}else{
				return (
				  //没登录首页
				  <NotLoginMain />	
				)
			}
		}else if(this.props.currentPage === "find"){
			return(
				<div>找人/机构</div>
			)
		}else if(this.props.currentPage === "material"){
			return(
				<div>正版素材</div>
			)
		}else if(this.props.currentPage === "sousuo"){
			return(
				<div>搜索</div>
			)
		}else if(this.props.currentPage === "login"){
			// console.log(this.props.appThis)
			return(
				<Login change={this.props.appThis}/>
			)
		}else if(this.props.currentPage === "register"){
			return(
				<div>注册</div>
			)
		}else{
			console.log("进来的是else")
			return(
				<LoginMain />
			)
		}
	}
}

export default HomeContent;