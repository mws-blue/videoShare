import React from "react";
import { Menu } from 'antd';
import "./Home.css"

const { SubMenu } = Menu;

class HomeHeader extends React.Component {
	constructor() {
		super();
	}

	handleClick = e => {
		console.log('click ', e);
		this.props.change.changePage(e.key);
	};

	handleChange = e =>{
		console.log(e.target.id);
		this.props.change.changePage(e.target.id);
	}

	render() {
		return (
			<div className="home-head" style={{ height: "46px" }}>
				<span className="logo-wrap">新片场</span>
				<Menu style={{ display: "inline-block" }} onClick={this.handleClick} mode="horizontal">
					<Menu.Item key="main"> 首页</Menu.Item>

					<SubMenu title={<span className="submenu-title-wrapper">发现</span>}>
						<Menu.ItemGroup title="作品">
							<Menu.Item key="setting:1">广告</Menu.Item>
							<Menu.Item key="setting:2">宣传片</Menu.Item>
						</Menu.ItemGroup>
						<Menu.Item key="wenzhang">文章</Menu.Item>
					</SubMenu>
					<Menu.Item key="find">找人/机构</Menu.Item>
					<Menu.Item key="school">学院</Menu.Item>
					<Menu.Item key="happy">快活</Menu.Item>
					<Menu.Item key="material">正版素材</Menu.Item>
					<SubMenu title={<span className="submenu-title-wrapper">活动</span>}>
						<Menu.Item key="setting:7">电影季</Menu.Item>
						<Menu.Item key="setting:8">创作吧少年</Menu.Item>
						<Menu.Item key="setting:9">VEW VISION毕业季 </Menu.Item>
						<Menu.Item key="setting:10">更多</Menu.Item>
					</SubMenu>
					<SubMenu title={<span className="submenu-title-wrapper">更多</span>}>
						<Menu.Item key="setting:1">新片场影业</Menu.Item>
						<Menu.Item key="setting:2">新片场短视频</Menu.Item>
						<Menu.Item key="setting:1">新片场营销 </Menu.Item>
						<Menu.Item key="setting:2">下载App</Menu.Item>
					</SubMenu>
				</Menu>
				<ul onClick={this.handleChange} className="right-part">
						<li id="vip">会员</li>
						<li id="sousuo">搜索</li>
						<li id="login">登录</li>
						<li id="register">注册</li>
					</ul>
			</div>
		)
	}
}


export default HomeHeader;