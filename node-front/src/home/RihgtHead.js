import React from "react";
import { Menu } from 'antd';
import avatar from "../img/avatar.jpg";

const { SubMenu } = Menu;


class NotLoginHead extends React.Component {
	constructor() {
		super();
	}

    
	handleChange(e) {
		this.props.headThis.handleChange(e);
	}
	
	
	handleClick =e=>{
		let that = this;
		if(e.key=== "reback"){//退出
			localStorage.setItem("userInfo","");
			console.log("已设置空了"+localStorage.getItem("userInfo"));
			this.changeMain("main");
		}else if(e.key==="privacy"){//进入私密视频
			this.toPrivacy("privacy")
		}
		else if(e.key==="upload"){//进入公开视频
			this.toUpload("upload")
		}
	}
   
	//HomeHead触发
	changeMain(a){
		console.log(this.props.headThis);
		this.props.headThis.handleChanges(a);
	}

	toUpload(a){
		this.props.headThis.handleChanges(a)
	}
	
	toPrivacy(a){
		this.props.headThis.handleChanges(a)
	}

	render() {
		//没有登录时右侧的格式
		if (localStorage.getItem("userInfo")===null ||localStorage.getItem("userInfo")===""||localStorage.getItem("userInfo")===undefined) {
			return (
				<ul onClick={this.handleChange.bind(this)} className="right-part">
					<li>会员</li>
					<li id="sousuo">搜索</li>
					<li id="login">登录</li>
					<li id="register">注册</li>
				</ul>
			)
		} else {//登录时右侧的格式
			return (
				<ul className="right-part">
					<li>会员</li>
					<li>搜索</li>
					<li>消息</li>
					<li>
					<Menu  style={{borderStyle:"none"}} className="head-menu" onClick={this.handleClick} mode="horizontal">
					<SubMenu title={<span className="submenu-title-wrapper"><img style={{width:"28px",height:"28px",borderRadius:"50%"}} src={avatar}/></span>}>
						<Menu.Item key="1">个人主页</Menu.Item>
						<Menu.Item key="2">收藏夹</Menu.Item>
						<Menu.Item key="3">私密视频 </Menu.Item>
						<Menu.Item key="5">我的素材</Menu.Item>
						<Menu.Item key="7">我的购物车 </Menu.Item>
						<Menu.Item key="8">认证</Menu.Item>
						<Menu.Item key="reback">退出</Menu.Item>
					</SubMenu>
				</Menu>
					</li>
					<li>
					<Menu style={{borderStyle:"none"}} className="head-menu" onClick={this.handleClick} mode="horizontal">
					<SubMenu title={<span className="submenu-title-wrapper">上传</span>}>
						<Menu.Item key="upload">公开作品</Menu.Item>
						<Menu.Item key="11">发布文章</Menu.Item>
						<Menu.Item key="12">私密视频 </Menu.Item>
					</SubMenu>
				</Menu>
					</li>
				</ul>
			)
		}

	}
}

export default NotLoginHead;