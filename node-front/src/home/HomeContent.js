import React from "react";

class HomeContent extends React.Component {
	constructor() {
		super();
	}

	render() {
		if (this.props.currentPage === "main") {
			return (
				<div>首页 </div>
			)
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
			return(
				<div>登录</div>
			)
		}else if(this.props.currentPage === "register"){
			return(
				<div>注册</div>
			)
		}else{
			return(
				<div>首页</div>
			)
		}
	}
}

export default HomeContent;