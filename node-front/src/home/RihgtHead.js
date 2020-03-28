import React from "react";
import { Menu } from 'antd';
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
		}
	}
   
	//HomeHead触发
	changeMain(a){
		console.log(this.props.headThis);
		this.props.headThis.handleReback(a);
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
					<SubMenu title={<span className="submenu-title-wrapper">头像</span>}>
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
						<Menu.Item key="10">新片场影业</Menu.Item>
						<Menu.Item key="11">新片场短视频</Menu.Item>
						<Menu.Item key="12">新片场营销 </Menu.Item>
						<Menu.Item key="13">下载App</Menu.Item>
					</SubMenu>
				</Menu>
					</li>
				</ul>
			)
		}

	}
}

export default NotLoginHead;